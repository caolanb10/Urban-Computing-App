import { combineReducers } from 'redux';
import { ACTION_TYPES } from './actions';

const INITIAL_STATE = {
  csvFiles: [],
  stations: [],
  latitude: '',
  longitude: '',
  accuracy: '',
  time: '',
  stationData: [],
  station: '',
};

const appReducer = (state = INITIAL_STATE, action) => {
  console.log('################################', action.type);
  switch (action.type) {
    case (ACTION_TYPES.UPDATE_LOCATION):
      console.log('update location received', action);
      return ({
        latitude: action.latitude,
        longitude: action.longitude,
        accuracy: action.accuracy,
        time: action.time,
      });
    case (ACTION_TYPES.UPDATE_CSV_FILES):
      return ({
        csvFiles: action.csvFiles,
      });
    case (ACTION_TYPES.UPDATE_STATION_LIST):
      return ({
        stations: action.stations,
      });
    case (ACTION_TYPES.RECEIVED_DATA):
      return ({
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
