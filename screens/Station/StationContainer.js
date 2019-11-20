import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import Station from './Station';

const mapStateToProps = ({
  app: {
    stationData,
    station,
    directions,
  },
}) => ({
  directions,
  station,
  stationData,
});

const initialState = {
  isListItemOpen: null,
};

const handlers = {};

export default compose(
  connect(mapStateToProps),
  withStateHandlers(initialState, handlers),
)(Station);
