import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import StationDropdown from './StationDropdown';
import { actionCreators } from '../../redux';

const mapDispatchToProps = (dispatch, { navigation: { dispatch: navDispatch } }) => ({
  stationNavigationHandler: (_, x) => actionCreators.navigateToStation({ navDispatch, dispatch }, x),
});

const mapStateToPropsAllStations = ({ app: { stations } }) => ({
  stations,
  title: 'All Stations',
});

export default compose(
  withNavigation,
  connect(mapStateToPropsAllStations, mapDispatchToProps),
)(StationDropdown);
