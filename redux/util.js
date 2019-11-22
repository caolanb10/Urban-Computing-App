// Find all directions listed in data
import { select } from 'redux-saga/effects';
import { selectNearStation } from './selectors';

const findAllDirections = ({ stationData }) => {
  const directionSet = new Set();
  stationData.forEach((train) => directionSet.add(train.Direction));
  const directionArray = [];
  directionSet.forEach((_, direction) => directionArray.push(direction));
  return directionArray;
};

// Re-orders stationData from directions array
const orderStationDataByDirection = ({ stationData }) => {
  const directionArray = findAllDirections({ stationData });
  const orderedStationData = [];
  directionArray.forEach((direction) => {
    orderedStationData.push(stationData.filter((train) => (train.Direction === direction)));
  });
  return ({ directions: directionArray, stationData: orderedStationData });
};

// Takes a list of train objects and returns the total lateness
const totalLatenessForListOfTrains = (trains) => trains.reduce((acc, train) => acc + Number(train.Late), 0);

// Use straight line distance to give nearest train station
// eslint-disable-next-line max-len
const getNearbyStations = ({ long, lat, nearbyStations }) => nearbyStations.sort((station1, station2) => Math.sqrt(((long - station1.StationLongitude) ** 2) + ((lat - station1.StationLatitude) ** 2))
  - Math.sqrt(((long - station2.StationLongitude) ** 2) + ((lat - station2.StationLatitude) ** 2)));

// Get lateness metrics for a given stations data
const getMetrics = ({ station, directions, stationData }) => {
  const latenessByDirection = directions.map((val, index) => {
    const totalLateness = totalLatenessForListOfTrains(stationData[index]);
    const amountOfTrains = stationData[index].length;

    return ({
      direction: val,
      totalLateness,
      averageLateness: totalLateness / amountOfTrains,
      amountOfTrains,
    });
  });
  return ({ ...latenessByDirection, station });
};


function* calculateLateMetrics({ allStationMetrics }) {
  const nearStation = yield select(selectNearStation);
  const allStationDataForNearStation = Object.values(allStationMetrics)
    .filter((metric) => metric.station.StationDesc === nearStation);
  const totalDataPoints = allStationDataForNearStation.length;
  let totalDirectionOne = 0;
  let totalDirectionTwo = 0;
  allStationDataForNearStation.forEach(({
    0: { averageLateness: dirOneAverageLateness },
    1: { averageLateness: dirTwoAverageLateness },
  }) => {
    totalDirectionOne += dirOneAverageLateness;
    totalDirectionTwo += dirTwoAverageLateness;
  });
  const averageDirectionOne = totalDirectionOne / totalDataPoints;
  const averageDirectionTwo = totalDirectionTwo / totalDataPoints;
  return { averageDirectionOne, averageDirectionTwo };
}

export {
  findAllDirections, orderStationDataByDirection, getMetrics, getNearbyStations, calculateLateMetrics,
};
