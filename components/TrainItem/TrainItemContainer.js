import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import TrainItem from './TrainItem';

const initialState = {
  isOpen: false,
};

const stateHandlers = {
  expand: ({ isOpen }) => () => ({ isOpen: !isOpen }),
};

export default compose(
  withStateHandlers(initialState, stateHandlers),
)(TrainItem);
