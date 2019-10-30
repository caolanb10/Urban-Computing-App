import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Sagas as rootSaga, Reducers } from './redux';
import Navigator from './Navigator';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  Reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
