export const ACTION_TYPES = {
  NEW_LOCATION: 'NEW_LOCATION',
  TRIGGER_UPDATE_CSV_FILES: 'TRIGGER_UPDATE_CSV_FILES',
  UPDATE_LOCATION: 'UPDATE_LOCATION',
  UPDATE_CSV_FILES: 'UPDATE_CSV_FILES',
  UPDATE_STATION_LIST: 'UPDATE_STATION_LIST',
  FETCH_STATION_LIST: 'FETCH_STATION_LIST',
};

export const actionCreators = {
  fetchStationList: () => ({ type: ACTION_TYPES.FETCH_STATION_LIST }),
  updateStationList: ({ stations }) => ({ type: ACTION_TYPES.UPDATE_STATION_LIST, stations }),
  triggerUpdateCSVFiles: () => ({ type: ACTION_TYPES.TRIGGER_UPDATE_CSV_FILES }),
  newLocation: (location) => ({ type: ACTION_TYPES.NEW_LOCATION, location }),
  updateLocation: ({
    latitude, longitude, accuracy, timestamp,
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
};
