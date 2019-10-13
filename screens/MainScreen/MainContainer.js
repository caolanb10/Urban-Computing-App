import {
  compose, withProps, withStateHandlers, withHandlers,
} from 'recompose';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';

import MainScreen from './MainScreen';

const initialState = {
  isRecording: false,
  status: 'Ready',
  username: '',
  location: {},
};

const stateHandlers = {
  startRecording: () => () => ({ isRecording: true, status: 'Recording' }),
  stopRecording: () => () => ({ isRecording: false, status: 'Finished ' }),
  setLocation: () => ({ lat, long }) => ({ location: { lat, long } }),
};

const handlers = {
  record: ({ setLocation }) => async () => {
    // https://docs.expo.io/versions/v35.0.0/sdk/location/
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('no permission');
    }
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });
    console.log(location);
    setLocation({ lat: location.coords.latitude, long: location.coords.longitude });
  },
  finish: () => () => {},
};

export default compose(
  withStateHandlers(initialState, stateHandlers),
  withHandlers(handlers),
)(MainScreen);
