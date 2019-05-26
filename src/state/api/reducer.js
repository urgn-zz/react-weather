import { API_GET_WEATHER_SUCCESS } from './consts';

const initState = {
  weather: {}
};

const getNowData = payload => {
  const {
    value: {
      now: {
        name,
        main: { temp },
        weather
      }
    }
  } = payload;

  return {
    location: name,
    temperature: temp,
    conditions: weather[0].main
  };
};

const getWeekData = payload => {
  const result = [];
  payload.value.week.list.forEach(data => {
    const date = new Date(data.dt * 1000);
    if (!result.find(day => day.date.getDay() === date.getDay())) {
      result.push({
        date,
        temperature: data.main.temp,
        conditions: data.weather[0].main
      });
    }
  });
  return result;
};

// eslint-disable-next-line import/prefer-default-export
export const apiReducer = (state = initState, action) => {
  switch (action.type) {
    case API_GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: {
          ...state.weather,
          [action.payload.locationId]: {
            now: getNowData(action.payload),
            week: getWeekData(action.payload)
          }
        }
      };
    default:
      return state;
  }
};
