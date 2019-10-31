import { compose, withHandlers, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { Accuracy, watchPositionAsync } from 'expo-location';
import Home from './Home';
import { actionCreators } from '../../redux';

const sampleStation = (name) => ({
  name,
  lat: -2,
  long: 2,
});

const mapStateToProps = ({
  app: {
    stations, longitude, latitude, time,
  },
}) => ({
  allStations: [sampleStation('Malahide'), sampleStation('Sutton'), sampleStation('Connolly')],
  nearbyStations: [sampleStation('Pearse'), sampleStation('Talbot'), sampleStation('Connolly')],
  longitude,
  latitude,
  time,
});

const mapDispatchToProps = (dispatch, { navigation: { dispatch: navDispatch } }) => ({
  locationHandler: (x) => dispatch(actionCreators.updateLocation(x)),
  stationNavigationHandler: (_, x) => actionCreators.navigateToStation({ navDispatch, dispatch }, x),
});

const initialState = {
  stopLocationTracking: null,
};

const stateHandlers = {
  locationTracker: () => ({ func }) => ({ stopLocationTracking: func }),
};

const handlers = {
  startWatchingLocation: ({ locationHandler, locationTracker }) => () => {
    const call = watchPositionAsync({ accuracy: Accuracy.Highest, timeInterval: 500 },
      locationHandler);
    locationTracker({ func: call });
  },
  stopWatchingLocation: ({ locationTracker }) => () => {
    locationTracker.remove();
  },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(initialState, stateHandlers),
  withHandlers(handlers),
)(Home);
