import {
  put, takeEvery, all, call,
} from 'redux-saga/effects';
import { readDirectoryAsync, documentDirectory } from 'expo-file-system';
import { ACTION_TYPES, actionCreators } from './actions';

function* updateLocation({ lat, long }) {
  yield put(actionCreators.updateLocation({ lat, long }));
  yield call(() => console.log('update firebase'));
  yield call(() => console.log('write to file'));
}

function* updateCSVFiles() {
  const files = yield call(readDirectoryAsync, documentDirectory);
  yield put(actionCreators.updateCSVFiles({ csvFiles: files }))
}

function* watchLocationUpdate() {
  yield takeEvery(ACTION_TYPES.UPDATE_LOCATION, updateLocation);
}

function* watchCSVFilesUpdate() {
  yield takeEvery(ACTION_TYPES.UPDATE_CSV_FILES, updateCSVFiles);
}

export default function* rootSaga() {
  yield all([
    watchLocationUpdate(),
  ]);
}
