import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import StationMap from './StationMap';
import { actionCreators } from '../../redux';

const mapStateToProps = ({
  app: { stations, longitude, latitude },
}) => ({
  allStations: stations,
  longitude,
  latitude,
  haveUserLocation: !!latitude,
});

const mapDispatchToProps = (dispatch, { navigation: { dispatch: navDispatch } }) => ({
  stationNavigationHandler: (_, x) => actionCreators.navigateToStation({ navDispatch, dispatch }, x),
});

const initialState = {
  mapCoordinates: {
    latitude: 53,
    longitude: -7,
    longitudeDelta: 5,
    latitudeDelta: 5,
  },
};

const stateHandlers = {
  changeRegion: () => (region) => ({ mapCoordinates: region }),
};


export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps),
 withStateHandlers(initialState, stateHandlers),
)(StationMap);
