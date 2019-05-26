/* eslint-disable import/prefer-default-export */
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';

import layoutReducer from './layout/reducer';
import locationsReducer from './locations/reducer';
import { apiReducer } from './api/reducer';
import { initSagas } from './api/sagas';
import { actionGetWeatherData } from './api/actions';

const rootReducer = combineReducers({
  layout: layoutReducer,
  apiData: apiReducer,
  location: locationsReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware, ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(initSagas);

store.dispatch(actionGetWeatherData(703448));
