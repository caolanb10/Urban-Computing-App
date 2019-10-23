import {
  compose, withStateHandlers, withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { watchPositionAsync, Accuracy } from 'expo-location';
import { Actions as actionCreators } from '../../redux';
import MainScreen from './MainScreen';

const mapStateToProps = ({ lat, long }) => ({ lat, long });

const mapDispatchToProps = {
  updateLocation: actionCreators.newLocation,
  triggerUpdateCSVFiles: actionCreators.triggerUpdateCSVFiles,
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
  stopSubscription: ({ stopRecording, watcher, clearWatcher, triggerUpdateCSVFiles }) => {
    stopRecording();
    watcher.remove();
    clearWatcher();
    triggerUpdateCSVFiles();
  },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(initialState, stateHandlers),
  withHandlers(handlers),
)(MainScreen);
