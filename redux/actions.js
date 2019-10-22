export const ACTION_TYPES = {
  UPDATE_LOCATION: 'UPDATE_LOCATION',
  UPDATE_CSV_FILES: 'UPDATE_CSV_FILES',
};

export const actionCreators = {
  updateLocation: ({ coords: { latitude, longitude, accuracy }, timestamp }) => ({
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
