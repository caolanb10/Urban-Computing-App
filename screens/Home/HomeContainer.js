import { compose, withHandlers, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { Accuracy, watchPositionAsync } from 'expo-location';
import * as Permissions from 'expo-permissions';
import Home from './Home';
import { actionCreators } from '../../redux';

const mapStateToProps = ({ app: { stations, nearbyStations } }) => ({
  allStations: stations,
  nearbyStations,
});

const mapDispatchToProps = (dispatch, { navigation: { dispatch: navDispatch }}) => ({
  locationHandler: (x) => dispatch(actionCreators.updateLocation(x)),
  visualisationNavigationHandler: () => actionCreators.navigateToVisualisation({ navDispatch, dispatch }),
});

const initialState = {
  locationTracker: null,
  isTracking: false,
  overlayActive: false,
};

const stateHandlers = {
  startLocationTracking: () => ({ func }) => ({
    locationTracker: func,
    isTracking: true,
  }),
  stopLocationTracking: () => () => ({
    locationTracker: null,
    isTracking: false,
  }),
  toggleOverlay: ({ overlayActive }) => () => ({
    overlayActive: !overlayActive,
  }),
};

const handlers = {
  startWatchingLocation: ({ locationHandler, startLocationTracking }) => async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status) {
      const call = await watchPositionAsync({ accuracy: Accuracy.Highest, timeInterval: 500 },
        locationHandler);
      startLocationTracking({ func: call });
    } else {
      console.log('Error: Permission not granted');
    }
  },
  stopWatchingLocation: ({ locationTracker, stopLocationTracking }) => () => {
    locationTracker.remove();
    stopLocationTracking();
  },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(initialState, stateHandlers),
  withHandlers(handlers),
)(Home);
