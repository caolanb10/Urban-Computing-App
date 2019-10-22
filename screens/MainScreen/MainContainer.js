import {
  compose, withProps, withStateHandlers, withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import Constants from 'expo-constants';
import { watchPositionAsync, Accuracy } from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';
import { Actions as actionCreators } from '../../redux';
import MainScreen from './MainScreen';

const mapStateToProps = ({ lat, long }) => ({ lat, long });

const mapDispatchToProps = {
  updateLocation: actionCreators.updateLocation,
};

const initialState = {
  isRecording: false,
  status: 'Ready',
  watcher: null,
};

const stateHandlers = {
  startRecording: () => () => ({ isRecording: true, status: 'Recording' }),
  stopRecording: () => () => ({ isRecording: false, status: 'Finished ' }),
  registerWatcher: () => ({ watcher }) => ({ watcher }),
  clearWatcher: () => () => ({ watcher: null }),
};

const handlers = {
  initiateSubscription: async ({ startRecording, registerWatcher, updateLocation }) => {
    startRecording();
    const watcher = await watchPositionAsync({ accuracy: Accuracy.Highest, timeInterval: 500 },
      (location) => updateLocation(location));
    registerWatcher({ watcher });
  },
  stopSubscription: ({ stopRecording, watcher, clearWatcher }) => {
    stopRecording();
    watcher.remove();
    clearWatcher();
  },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(initialState, stateHandlers),
  withHandlers(handlers),
)(MainScreen);
