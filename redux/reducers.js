import { combineReducers } from 'redux';
import { ACTION_TYPES } from './actions';

const INITIAL_STATE = {
  csvFiles: [],
  stations: [],
  latitude: '',
  longitude: '',
  accuracy: '',
  time: '',
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (ACTION_TYPES.UPDATE_LOCATION):
      console.log('update location received');
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
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer,
});
