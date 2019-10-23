import {
  put, takeEvery, all, call,
} from 'redux-saga/effects';
import { readDirectoryAsync, documentDirectory } from 'expo-file-system';
import { ACTION_TYPES, actionCreators } from './actions';

///////////////
// Workers ///
///////////////
function* newLocation({ location: { coords: { latitude, longitude, accuracy }, timestamp } }) {
  console.log('here', latitude, longitude, accuracy, timestamp);
  yield put(actionCreators.updateLocation({
    latitude, longitude, accuracy, timestamp,
  }));
  yield call(() => console.log('update firebase'));
  yield call(() => console.log('write to file'));
}

function* updateCSVFiles() {
  const files = yield call(readDirectoryAsync, documentDirectory);
  yield put(actionCreators.updateCSVFiles({ csvFiles: files }));
}

///////////////
// Watchers //
//////////////
function* watchLocationUpdate() {
  yield takeEvery(ACTION_TYPES.NEW_LOCATION, newLocation);
}

function* watchCSVFilesUpdate() {
  yield takeEvery(ACTION_TYPES.TRIGGER_UPDATE_CSV_FILES, updateCSVFiles);
}

export default function* rootSaga() {
  yield all([
    watchCSVFilesUpdate(),
    watchLocationUpdate(),
  ]);
}
