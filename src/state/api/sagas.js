import { put, takeLatest } from 'redux-saga/effects';
import { map } from 'ramda';
import { actionWeatherDataFailed, actionWeatherDataSuccess } from './actions';
import { API_GET_WEATHER } from './consts';

const corsProxy = 'https://cors-anywhere.herokuapp.com/';

const getApiUrls = cityId => {
  const apiUrl = `${corsProxy}http://api.openweathermap.org/data/2.5/`;

  return map(
    s => `${s}&apiKey=${process.env.REACT_APP_OWM_API_KEY}&units=metric`,
    {
      now: `${apiUrl}weather?id=${cityId}`,
      week: `${apiUrl}forecast?id=${cityId}`
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

export function* initSagas() {
  yield takeLatest(API_GET_WEATHER, getWeatherSaga);
}
