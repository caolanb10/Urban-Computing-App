import {
  compose, withStateHandlers, withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux';
import MainScreen from './MainScreen';

const mapStateToProps = ({ app: { latitude, longitude } }) => ({
  long: longitude.toString(),
  lat: latitude.toString(),
});

const mapDispatchToProps = { };

const initialState = { };

const stateHandlers = { };

const handlers = {
  initiateSubscription: ({ startRecording, registerWatcher, updateLocation }) => async () => {},
  stopSubscription: ({
    stopRecording, watcher, clearWatcher, triggerUpdateCSVFiles,
  }) => () => { },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(initialState, stateHandlers),
  withHandlers(handlers),
)(MainScreen);
