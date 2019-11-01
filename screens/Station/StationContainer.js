import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import Constants from './constants';
import Station from './Station';

const { NORTHBOUND, SOUTHBOUND } = Constants;

const getTrainDirection = ({ stationData, direction }) => stationData.filter((train) => (train.Direction === direction));

const mapStateToProps = ({
  app: {
    stationData,
    station,
  },
}) => console.log('state', stationData) || ({
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
