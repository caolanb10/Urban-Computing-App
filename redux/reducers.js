import { combineReducers } from 'redux';
import { ACTION_TYPES } from './actions';
import { getNearbyStations } from './util';

const INITIAL_STATE = {
  csvFiles: [],
  stations: undefined,
  latitude: undefined,
  longitude: undefined,
  accuracy: undefined,
  lateMetrics: [],
  time: '',
  stationData: undefined,
  station: '',
  directions: [],
  nearbyStations: [],
  metrics: undefined,
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
    case (ACTION_TYPES.NEAREST_STATION_DATA):
      return ({
        ...state,
        nearStation: action.nearStation,
        lateMetrics: action.lateMetrics,
      });
    case (ACTION_TYPES.SET_METRICS):
      return ({
        ...state,
        metrics: action.metrics,
      });
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer,
});
