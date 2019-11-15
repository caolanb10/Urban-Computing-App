import { constants, Database, requests } from './Firebase';
import * as _ from 'lodash';
import { actionCreators } from './redux';

function* fetchAllStationData() {
  const stationData = yield call(requests.getAllStations);
  const formattedData = stationData.map(
    (station) => ({ ...station, StationDesc: _.capitalize(station.StationDesc) }),
  );
  const sortedData = formattedData.sort((firstEl, secondEl) => {
    const first = firstEl.StationDesc.toUpperCase();
    const second = secondEl.StationDesc.toUpperCase();
    console.log('in func', first, second);
    if (first < second) return -1;
    if (first > second) return 1;
    return 0;
  });
  yield call(Database.setToDB, { data: sortedData, table: constants.STATION_LIST });
  yield put(actionCreators.updateStationList({ stations: sortedData }));
}
