import {
  API_GET_WEATHER,
  API_GET_WEATHER_FAIL,
  API_GET_WEATHER_SUCCESS
} from './consts';

export const actionGetWeatherData = value => ({
  type: API_GET_WEATHER,
  payload: { value }
});

export const actionWeatherDataSuccess = (locationId, value) => ({
  type: API_GET_WEATHER_SUCCESS,
  payload: { locationId, value }
});

export const actionWeatherDataFailed = value => ({
  type: API_GET_WEATHER_FAIL,
  payload: { value }
});
