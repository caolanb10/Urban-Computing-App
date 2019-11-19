import { compose } from 'recompose';
import { connect } from 'react-redux';
import LateTrains from './LateTrains';

const mapStateToProps = ({ app: { nearStationData } }) => ({
  nearStationData,
});

export default compose(
  connect(mapStateToProps),
)(LateTrains);
