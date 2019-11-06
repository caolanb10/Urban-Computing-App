import {
  put, all, call, takeEvery,
} from 'redux-saga/effects';
import { requests, constants, Database, reduxSagaFirebase } from '../Firebase';
import { actionCreators, ACTION_TYPES } from './actions';

function* fetchAllStationData() {
  const stationData = yield call(reduxSagaFirebase.database.read, constants.STATION_LIST);
  yield put(actionCreators.updateStationList({ stations: stationData }));
}

function* fetchStationData({ station }) {
  const stationData = yield call(requests.getStationDataByName, { name: station });
  yield put(actionCreators.receivedData({ stationData, station }));
  yield call(Database.postToDB, { data: stationData, table: constants.STATION_REQUESTS });
}

function* updateLocation({
  accuracy, latitude, longitude, time,
}) {
  const location = {
    accuracy, latitude, longitude, time,
  };
  yield call(Database.postToDB, { data: location, table: constants.LOCATION_UPDATES });
}

export default function* rootSaga() {
  yield all([
    fetchAllStationData(),
    yield takeEvery(ACTION_TYPES.NAV.STATION, fetchStationData),
    yield takeEvery(ACTION_TYPES.UPDATE_LOCATION, updateLocation),
  ]);
}
