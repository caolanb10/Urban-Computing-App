import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import StationDropdown from './StationDropdown';
import mapDispatchToProps from './mapDispatchToProps';

const mapStateToProps = ({ app: { stations } }) => ({
  stations,
  title: 'All Stations',
});

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps),
)(StationDropdown);
