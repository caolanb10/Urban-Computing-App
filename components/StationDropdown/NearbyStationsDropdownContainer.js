import { compose } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import StationDropdown from './StationDropdown';
import { actionCreators } from '../../redux';

const mapDispatchToProps = (dispatch, { navigation: { dispatch: navDispatch } }) => ({
  stationNavigationHandler: (_, x) => actionCreators.navigateToStation({ navDispatch, dispatch }, x),
});

const mapStateToPropsNearbyStations = ({ app: { nearbyStations } }) => ({
  stations: nearbyStations,
  title: 'Nearby Stations',
});

export default compose(
  withNavigation,
  connect(mapStateToPropsNearbyStations, mapDispatchToProps),
)(StationDropdown);
