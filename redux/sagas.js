import {
  put, all, call, takeEvery,
} from 'redux-saga/effects';
import { requests, constants, Database } from '../Firebase';
import { actionCreators, ACTION_TYPES } from './actions';


function* fetchAllStationData() {
  const stationData = yield call(requests.getAllStations);
  yield call(Database.setToDB, { data: stationData, table: constants.STATION_LIST });
  yield put(actionCreators.updateStationList({ stations: stationData }));
}

function* readStationData() {
  const stationArg = { table: constants.STATION_LIST };
  const databaseReference = yield call(Database.ref, stationArg);
  let stationDataVar;
  yield call(databaseReference.on('value', (stationData) => { stationDataVar = stationData; }));
  yield put(actionCreators.updateStationList({ stations: stationDataVar }));
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

function* watchForStationRoute() {
  yield takeEvery(ACTION_TYPES.NAV.STATION, fetchStationData);
}

function* watchForUserLocationUpdate() {
  yield takeEvery(ACTION_TYPES.UPDATE_LOCATION, updateLocation);
}

export default function* rootSaga() {
  yield all([
    fetchAllStationData(),
    watchForStationRoute(),
    watchForUserLocationUpdate(),
    readStationData(),
  ]);
}
