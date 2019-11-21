import {
  put, all, call, takeEvery, select,
} from 'redux-saga/effects';
import {
  requests, constants, Database, reduxSagaFirebase,
} from '../Firebase';
import { actionCreators, ACTION_TYPES } from './actions';
import { orderStationDataByDirection, getMetrics } from './util';

function* fetchAllStationData() {
  const stationData = yield call(reduxSagaFirebase.database.read, constants.STATION_LIST);
  yield put(actionCreators.updateStationList({ stations: stationData }));
}

function* fetchStationData({ station }) {
  const stationData = yield call(requests.getStationDataByName, { name: station });

  const formattedStationData = {
    station,
    ...orderStationDataByDirection({ stationData }),
  };

  yield put(actionCreators.receivedData(formattedStationData));
  yield call(Database.postToDB, {
    data: formattedStationData,
    table: constants.STATION_REQUESTS,
  });
}

function* updateLocation({
  accuracy, latitude, longitude, time,
}) {
  const location = {
    accuracy, latitude, longitude, time,
  };
  yield call(Database.postToDB, { data: location, table: constants.LOCATION_UPDATES });
}

function* fetchNearbyStationData() {
  const nearStation = yield select(({ app: { nearbyStations } }) => (
    nearbyStations[0]
  ));
  const nearStationData = yield call(requests.getStationDataByName, {
    name: nearStation.StationDesc,
  });

  const formattedNearStationData = {
    station: nearStation,
    ...orderStationDataByDirection({ stationData: nearStationData }),
  };

  const lateMetrics = getMetrics(formattedNearStationData);

  yield call(Database.postToDB, { data: lateMetrics, table: constants.NEAREST_STATION_DATA });
  yield put(actionCreators.nearestStationsData({ nearStation, lateMetrics }));
}

function* fetchStationMetrics() {
  const allStationMetrics = yield call(reduxSagaFirebase.database.read, constants.NEAREST_STATION_DATA);
  const nearStation = yield select(({ app: { nearStation } }) => nearStation.StationDesc);
  const filteredMetrics = Object.values(allStationMetrics).filter((metric) => metric.station.StationDesc === nearStation);
  const metrics = filteredMetrics.reduce((acc, metric) => ({
    first: { direction: metric[0].direction, totalLateness: metric[0].totalLateness + acc.first.totalLateness, number: acc.first.number + 1 },
    second: { direction: metric[1].direction, totalLateness: metric[1].totalLateness + acc.second.totalLateness, number: acc.first.number + 1 },
  }), { first: { direction: undefined, totalLateness: 0, number: 0 }, second: { direction: undefined, totalLateness: 0, number: 0 } });
  yield put(actionCreators.setMetrics({ metrics }));
}

export default function* rootSaga() {
  yield all([
    fetchAllStationData(),
    yield takeEvery(ACTION_TYPES.NAV.STATION, fetchStationData),
    yield takeEvery(ACTION_TYPES.NAV.METRICS, fetchStationMetrics),
    yield takeEvery(ACTION_TYPES.UPDATE_LOCATION, updateLocation),
    yield takeEvery(ACTION_TYPES.UPDATE_LOCATION, fetchNearbyStationData),
  ]);
}
