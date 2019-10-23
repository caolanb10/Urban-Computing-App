import { combineReducers } from 'redux';
import { ACTION_TYPES } from './actions';

const INITIAL_STATE = {
  csvFiles: [],
  latitude: null,
  longitude: null,
  accuracy: null,
  time: null,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (ACTION_TYPES.UPDATE_LOCATION):
      return ({
        latitude: action.latitude,
        longitude: action.latitude,
        accuracy: action.accuracy,
        time: action.time,
      });
    case (ACTION_TYPES.UPDATE_CSV_FILES):
      return ({
        csvFiles: action.csvFiles,
      });
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer,
});
