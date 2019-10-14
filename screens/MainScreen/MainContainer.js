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
  intervalFunc: '',
  location: { lat: '', long: '' },
};

const stateHandlers = {
  startRecording: () => () => ({ isRecording: true, status: 'Recording' }),
  stopRecording: () => () => ({ isRecording: false, status: 'Finished ' }),
  setLocation: () => ({ lat, long }) => ({ location: { lat, long } }),
  setIntervalFunction: () => ({ funcId }) => ({ intervalFunc: funcId }),
  clearIntervalFunction: () => () => ({ intervalFunc: null }),
};

const getLocation = async ({ setLocation }) => async () => {
  const location = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Highest,
  });
  setLocation({ lat: location.coords.latitude.toString(), long: location.coords.longitude.toString() });
};

const handlers = {
  record: ({ setLocation, startRecording, setIntervalFunction }) => async () => {
    // https://docs.expo.io/versions/v35.0.0/sdk/location/
    startRecording();
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('no permission');
    }
    const intervalFunction = setInterval(await getLocation({ setLocation }), 500);
    setIntervalFunction({ funcId: intervalFunction });
  },
  finish: (props) => () => {
    const { stopRecording, intervalFunc } = props;
    clearInterval(intervalFunc);
    stopRecording();
  },
};

export default compose(
  withStateHandlers(initialState, stateHandlers),
  withHandlers(handlers),
)(MainScreen);
