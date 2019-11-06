import { compose, withHandlers, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { Accuracy, watchPositionAsync } from 'expo-location';
import * as Permissions from 'expo-permissions';
import Home from './Home';
import { actionCreators } from '../../redux';

const mapStateToProps = ({
  app: {
    stations, longitude, latitude, time, accuracy,
  },
}) => ({
  allStations: stations,
  nearbyStations: stations ? stations.slice(0, 5) : [],
  longitude,
  latitude,
  accuracy,
  time,
  haveUserLocation: !!latitude,
});

const mapDispatchToProps = (dispatch, { navigation: { dispatch: navDispatch } }) => ({
  locationHandler: (x) => dispatch(actionCreators.updateLocation(x)),
  stationNavigationHandler: (_, x) => actionCreators.navigateToStation({ navDispatch, dispatch }, x),
});

const initialState = {
  locationTracker: null,
  isTracking: false,
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
};

const handlers = {
  startWatchingLocation: ({ locationHandler, startLocationTracking }) => async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    console.log(status);
    const call = await watchPositionAsync({ accuracy: Accuracy.Highest, timeInterval: 500 },
      locationHandler);
    startLocationTracking({ func: call });
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
