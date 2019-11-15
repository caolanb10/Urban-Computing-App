import { compose, withStateHandlers } from 'recompose';
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
