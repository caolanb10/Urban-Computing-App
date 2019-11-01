// returns a list of all stations
const getAllStations = 'http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML';

// returns a list of all stations
const getAllStationsByType = ({ type }) => `${getAllStations}_WithStationType=${type}`;

// returns a listing of 'running trains' ie trains that are between origin and destination
// or are due to start within 10 minutes of the query time.
const getCurrentTrains = 'http://api.irishrail.ie/realtime/realtime.asmx/getCurrentTrainsXML';

// returns a listing of 'running trains' ie trains that are between origin and destination
// or are due to start within 10 minutes of the query time.
const getCurrentTrainsByType = ({ type }) => `${getCurrentTrains}_WithTrainType=${type}`;

// returns all trains due to serve the named station in the next 90 minutes
const getStationDataByName = ({ name }) => `http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML?StationDesc=${name}`;

// returns all trains due to serve the named station in the next x minutes
// (x must be between 5 and 90)
const getStationDataByNameWithMinutes = ({ name, minutes }) => `http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML?StationDesc=${name}&NumMins=${minutes}`;

// returns all trains due to serve the named station in the next 90 minutes
const getStationDataByCode = ({ station }) => `http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByCodeXML?StationCode=${station}`;


// returns all trains due to serve the named station in the next x minutes
// (x must be between 5 and 90)
const getStationDataByCodeWithMinutes = ({ code, minutes }) => `http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByCodeXML_WithNumMins?StationCode=${code}&NumMins=${minutes}`;

// returns a list of station names that contain the StationText
const getStationsWithFilter = ({ text }) => `http://api.irishrail.ie/realtime/realtime.asmx/getStationsFilterXML?StationText=${text}`;

// returns all stop information for the given train
const getTrainMovements = ({ id, dateString }) => `http://api.irishrail.ie/realtime/realtime.asmx/getTrainMovementsXML?TrainId=${id}&TrainDate=${dateString}`;

export default {
  getAllStations,
  getAllStationsByType,
  getCurrentTrains,
  getCurrentTrainsByType,
  getStationDataByName,
  getStationDataByNameWithMinutes,
  getStationDataByCode,
  getStationDataByCodeWithMinutes,
  getStationsWithFilter,
  getTrainMovements,
};
