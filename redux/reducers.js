import { combineReducers } from 'redux';
import { ACTION_TYPES } from './actions';

const INITIAL_STATE = {
  csvFiles: [],
  stations: [],
  latitude: undefined,
  longitude: undefined,
  accuracy: undefined,
  time: '',
  stationData: [],
  station: '',
};

const appReducer = (state = INITIAL_STATE, action) => {
  console.log('################################', state, action.type);
  switch (action.type) {
    case (ACTION_TYPES.UPDATE_LOCATION):
      return ({
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
        accuracy: action.accuracy,
        time: action.time,
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
      });
    case (ACTION_TYPES.RECEIVED_DATA):
      return ({
        ...state,
        stationData: action.stationData,
        station: action.station,
      });
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer,
});
