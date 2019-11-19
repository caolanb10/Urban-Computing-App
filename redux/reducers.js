import { combineReducers } from 'redux';
import { ACTION_TYPES } from './actions';
import getNearbyStations from './getNearbyStations';

const INITIAL_STATE = {
  csvFiles: [],
  stations: undefined,
  latitude: undefined,
  longitude: undefined,
  accuracy: undefined,
  nearStationData: [],
  time: '',
  stationData: undefined,
  station: '',
  directions: [],
  nearbyStations: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  console.log('################################', action.type);
  switch (action.type) {
    case (ACTION_TYPES.UPDATE_LOCATION):
      return ({
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
        accuracy: action.accuracy,
        time: action.time,
        nearbyStations: getNearbyStations({
          long: action.longitude,
          lat: action.latitude,
          nearbyStations: [...state.nearbyStations],
        }),
      });
    case (ACTION_TYPES.UPDATE_CSV_FILES):
      return ({
        ...state,
        csvFiles: action.csvFiles,
      });
    case (ACTION_TYPES.UPDATE_STATION_LIST):
      return ({
        ...state,
        stations: action.stations,
        nearbyStations: [...action.stations],
      });
    case (ACTION_TYPES.RECEIVED_DATA):
      return ({
        ...state,
        stationData: action.stationData,
        station: action.station,
        directions: action.directions,
      });
    case (ACTION_TYPES.TOP_NEAREST_STATIONS_DATA):
      return ({
        ...state,
        nearStationData: action.nearStationData,
      });
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer,
});
