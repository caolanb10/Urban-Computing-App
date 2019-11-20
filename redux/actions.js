import { NavigationActions } from 'react-navigation';

export const ACTION_TYPES = {
  NEW_LOCATION: 'NEW_LOCATION',
  TRIGGER_UPDATE_CSV_FILES: 'TRIGGER_UPDATE_CSV_FILES',
  UPDATE_LOCATION: 'UPDATE_LOCATION',
  UPDATE_CSV_FILES: 'UPDATE_CSV_FILES',
  UPDATE_STATION_LIST: 'UPDATE_STATION_LIST',
  FETCH_STATION_LIST: 'FETCH_STATION_LIST',
  RECEIVED_DATA: 'RECEIVED_DATA',
  NEAREST_STATION_DATA: 'NEAREST_STATION_DATA',
  NAV: {
    STATION: 'NAV_STATION',
  },
};


const navigateActions = {
  navigateToStation: ({ navDispatch, dispatch }, station) => {
    if (!station) return;
    dispatch({ type: ACTION_TYPES.NAV.STATION, station });
    navDispatch(NavigationActions.navigate({
      routeName: 'Station',
      params: { station },
    }));
  },
};

export const actionCreators = {
  ...navigateActions,
  fetchStationList: () => ({
    type: ACTION_TYPES.FETCH_STATION_LIST,
  }),
  updateStationList: ({ stations }) => ({
    type: ACTION_TYPES.UPDATE_STATION_LIST,
    stations,
  }),
  triggerUpdateCSVFiles: () => ({
    type: ACTION_TYPES.TRIGGER_UPDATE_CSV_FILES,
  }),
  receivedData: ({ stationData, station, directions }) => ({
    type: ACTION_TYPES.RECEIVED_DATA,
    stationData,
    station,
    directions,
  }),
  updateLocation: ({
    coords: { latitude, longitude, accuracy }, timestamp,
  }) => ({
    type: ACTION_TYPES.UPDATE_LOCATION,
    latitude,
    longitude,
    accuracy,
    time: new Date(timestamp).toISOString(),
  }),
  updateCSVFiles: ({ csvFiles }) => ({
    type: ACTION_TYPES.UPDATE_CSV_FILES,
    csvFiles,
  }),
  nearestStationsData: ({
    nearStation,
    lateMetrics,
  }) => ({
    type: ACTION_TYPES.NEAREST_STATION_DATA,
    lateMetrics,
    nearStation,
  }),
};
