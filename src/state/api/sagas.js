/* eslint-disable import/prefer-default-export */
import { put, takeLatest } from 'redux-saga/effects';
import { map } from 'ramda';
import { actionWeatherDataFailed, actionWeatherDataSuccess } from './actions';
import { API_GET_WEATHER } from './consts';
import { REQUEST_LOCATION } from '../locations/consts';
import {
  requestLocationAddFail,
  requestLocationAddSuccess
} from '../locations/actions';

const corsProxy = 'https://cors-anywhere.herokuapp.com/';

const getApiUrls = (cityId, cityQuery) => {
  const apiUrl = `${corsProxy}http://api.openweathermap.org/data/2.5/`;

  return map(
    s =>
      `${apiUrl}${s}&apiKey=${process.env.REACT_APP_OWM_API_KEY}&units=metric`,
    {
      now: `weather?id=${cityId}`,
      week: `forecast?id=${cityId}`,
      cityQuery: `weather?q=${cityQuery}`
    }
  );
};

function* getWeatherSaga(action) {
  try {
    const { now, week } = getApiUrls(action.payload.value);

    let weatherDataNow = yield fetch(now);
    let weatherDataWeek = yield fetch(week);

    weatherDataNow = yield weatherDataNow.json();
    weatherDataWeek = yield weatherDataWeek.json();

    yield put(
      actionWeatherDataSuccess(action.payload.value, {
        now: weatherDataNow,
        week: weatherDataWeek
      })
    );
  } catch (e) {
    yield put(actionWeatherDataFailed(e));
  }
}

function* validateLocationSaga(action) {
  try {
    const { cityQuery } = getApiUrls(null, action.payload.value);

    const queryResult = yield fetch(cityQuery);

    if (queryResult.status !== 200) {
      yield put(requestLocationAddFail());
    } else {
      const parsedQueryResult = yield queryResult.json();
      yield put(requestLocationAddSuccess(parsedQueryResult));
    }
  } catch (e) {
    yield put(requestLocationAddFail());
  }
}

export function* initSagas() {
  yield takeLatest(API_GET_WEATHER, getWeatherSaga);
  yield takeLatest(REQUEST_LOCATION, validateLocationSaga);
}
