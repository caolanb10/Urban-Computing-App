import {
  compose, withStateHandlers, withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { watchPositionAsync, Accuracy } from 'expo-location';
import { actionCreators } from '../../redux';
import MainScreen from './MainScreen';

const mapStateToProps = ({ app: { latitude, longitude } }) => ({
  long: longitude.toString(),
  lat: latitude.toString(),
});

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
  initiateSubscription: ({ startRecording, registerWatcher, updateLocation }) => async () => {
    startRecording();
    const watcher = await watchPositionAsync({ accuracy: Accuracy.Highest, timeInterval: 500 },
      (location) => { console.log('subscription caller called'); updateLocation(location); });
    registerWatcher({ watcher });
  },
  stopSubscription: ({
    stopRecording, watcher, clearWatcher, triggerUpdateCSVFiles,
  }) => () => {
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
