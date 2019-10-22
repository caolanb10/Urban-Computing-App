export const ACTION_TYPES = {
  UPDATE_LOCATION: 'UPDATE_LOCATION',
  NEW_LOCATION: 'NEW_LOCATION',
  TRIGGER_UPDATE_CSV_FILES: 'TRIGGER_UPDATE_CSV_FILES',
  UPDATE_CSV_FILES: 'UPDATE_CSV_FILES',
};

export const actionCreators = {
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
