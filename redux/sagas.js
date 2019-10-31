import {
  put, all, call, takeEvery,
} from 'redux-saga/effects';
import { requests, constants, Database } from '../Firebase';
import { actionCreators, ACTION_TYPES } from './actions';


function* fetchAllStationData() {
  const stationData = yield call(requests.getAllStations);
  yield call(Database.setToDB, { data: stationData, table: constants.STATION_LIST });
}

function* readStationData() {
  const stationArg = { table: constants.STATION_LIST };
  const databaseReference = yield call(Database.ref, stationArg);
  let stationDataVar;
  yield call(databaseReference.on('value', (stationData) => { stationDataVar = stationData; }));
  yield put(actionCreators.updateStationList({ stations: stationDataVar }));
}

function* fetchStationData({ station }) {
  console.log('----- received action', station);
  const stationData = yield call(requests.getStationDataByName, { name: station });
  console.log('-------station data', stationData);
  yield put(actionCreators.receivedData({ stationData, station }));
}

function* watchForStationRoute() {
  yield takeEvery(ACTION_TYPES.NAV.STATION, fetchStationData);
}

export default function* rootSaga() {
  yield all([
    fetchAllStationData(),
    watchForStationRoute(),
    readStationData(),
  ]);
}
