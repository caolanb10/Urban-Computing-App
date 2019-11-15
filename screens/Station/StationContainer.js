import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import Station from './Station';

const getStationDataByDirection = ({ stationData, directions }) => {
  const directionArray = [];
  directions.forEach((direction) => {
    directionArray.push(stationData.filter((train) => (train.Direction === direction)));
  });
  console.log(directionArray);
  return (directionArray);
};

const mapStateToProps = ({
  app: {
    stationData,
    station,
    directions,
  },
}) => ({
  directions,
  station,
  stationDataByDirection:
    stationData ? getStationDataByDirection({
      stationData,
      directions,
    }) : null,
});

const initialState = {
  isListItemOpen: null,
};

const handlers = {};

export default compose(
  connect(mapStateToProps),
  withStateHandlers(initialState, handlers),
)(Station);
