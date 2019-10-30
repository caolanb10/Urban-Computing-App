import {
  put, all, call,
} from 'redux-saga/effects';
import { Accuracy, watchPositionAsync } from 'expo-location';
import { requests, constants, Database } from '../Firebase';
import { actionCreators } from './actions';

///////////////
// Workers ///
///////////////

function* newLocation({ location: { coords: { latitude, longitude, accuracy }, timestamp } }) {
  console.log('here', latitude, longitude, accuracy, timestamp);
  yield put(actionCreators.updateLocation({
    latitude, longitude, accuracy, timestamp,
  }));
}

function* startWatchingLocation() {
  yield call(watchPositionAsync, { accuracy: Accuracy.Highest, timeInterval: 500 }, newLocation);
}

function* setStationData() {
  const stationData = yield call(requests.getAllStations);
  yield call(Database.setToDB, { data: stationData, table: constants.STATION_LIST });
}

function* readStationData() {
  const stationArg = { table: constants.STATION_LIST };
  const databaseReference = yield call(Database.ref, stationArg);
  let stationDataVar;
  yield call(databaseReference.on('value', (stationData) => { stationDataVar = stationData; }));
  if (stationDataVar !== undefined) {
    yield put(actionCreators.updateStationList({ stations: stationDataVar }));
  }
}

export default function* rootSaga() {
  yield all([
    startWatchingLocation(),
    setStationData(),
    readStationData(),
  ]);
}
