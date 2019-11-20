import { compose } from 'recompose';
import { connect } from 'react-redux';

import Visualisation from './Visualisation';

const mapStateToProps = ({
  app: {
    nearStation,
    lateMetrics,
  },
}) => ({
  lateMetrics,
  nearStation,
});

export default compose(
  connect(mapStateToProps),
)(Visualisation);
