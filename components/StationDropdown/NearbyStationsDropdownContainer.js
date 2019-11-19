import { compose } from 'recompose';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import StationDropdown from './StationDropdown';
import mapDispatchToProps from './mapDispatchToProps';

const mapStateToProps = ({ app: { nearbyStations } }) => ({
  stations: nearbyStations,
  title: 'Nearby Stations',
});

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps),
)(StationDropdown);
