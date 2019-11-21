// Find all directions listed in data
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
const getNearbyStations = ({ long, lat, nearbyStations }) => nearbyStations.sort((station1, station2) => Math.sqrt(((long - station1.StationLongitude) ** 2) + ((lat - station1.StationLatitude) ** 2))
  - Math.sqrt(((long - station2.StationLongitude) ** 2) + ((lat - station2.StationLatitude) ** 2)));

// Get lateness metrics for a given stations data
const getMetrics = ({ directions, stationData }) => {
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
  return (latenessByDirection);
};

export {
  findAllDirections, orderStationDataByDirection, getMetrics, getNearbyStations,
};
