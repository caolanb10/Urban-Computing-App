import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import Station from './Station';

const NORTHBOUND = 'Northbound';
const SOUTHBOUND = 'Southbound';

const getTrainDirection = ({ stationData, direction }) => stationData.filter((train) => (train.Direction === direction));

const mapStateToProps = ({
  app: {
    stationData,
    station,
  },
}) => console.log('stations data ----------', stationData) || ({
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
