import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { NORTHBOUND, SOUTHBOUND } from './constants';
import Station from './Station';

const getTrainDirection = ({ stationData, direction }) => stationData.filter((train) => (train.Direction === direction));

const mapStateToProps = ({
  app: {
    stationData,
    station,
  },
}) => ({
  northBoundData: stationData ? getTrainDirection({ stationData, direction: NORTHBOUND }) : [],
  southBoundData: stationData ? getTrainDirection({ stationData, direction: SOUTHBOUND }) : [],
  station,
});

const initialState = {
  isListItemOpen: null,
};

const handlers = {};

export default compose(
  connect(mapStateToProps),
  withStateHandlers(initialState, handlers),
)(Station);
