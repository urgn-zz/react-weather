import { addLocation } from './locations/actions';
import { actionWeatherDataSuccess } from './api/actions';

const testWeek = [
  {
    date: new Date('1970-01-01'),
    temperature: 123,
    conditions: 'Clouds'
  },
  {
    date: new Date('1970-01-02'),
    temperature: 123,
    conditions: 'Clear'
  },
  {
    date: new Date('1970-01-03'),
    temperature: 123,
    conditions: 'Snow'
  },
  {
    date: new Date('1970-01-04'),
    temperature: 123,
    conditions: 'Mist'
  },
  {
    date: new Date('1970-01-05'),
    temperature: 123,
    conditions: 'Rain'
  },
  {
    date: new Date('1970-01-05'),
    temperature: 123,
    conditions: 'Thunderstorm'
  }
];

const testLocations = [
  {
    id: -1,
    name: 'Cloudy City',
    temperature: 1,
    conditions: 'Clouds'
  },
  {
    id: -2,
    name: 'Clear sky city',
    temperature: 1,
    conditions: 'Clear'
  },
  {
    id: -3,
    name: 'Snowy city',
    temperature: 1,
    conditions: 'Snow'
  },
  {
    id: -4,
    name: 'Rainy city',
    temperature: 1,
    conditions: 'Rain'
  },
  {
    id: -5,
    name: 'Foggy city',
    temperature: 1,
    conditions: 'Mist'
  },
  {
    id: -6,
    name: 'Thunder city',
    temperature: 1,
    conditions: 'Thunderstorm'
  }
];

export default store => {
  testLocations.forEach(location => {
    store.dispatch(
      addLocation({
        ...location,
        country: 'TEST'
      })
    );
    store.dispatch(
      actionWeatherDataSuccess(location.id, {
        now: {
          name: location.name,
          main: { temp: location.temperature },
          weather: [{ main: location.conditions }]
        },
        week: {
          list: testWeek.map(weekDay => ({
            dt: Math.ceil(weekDay.date.getTime() / 1000),
            main: { temp: weekDay.temperature },
            weather: [{ main: weekDay.conditions }]
          }))
        }
      })
    );
  });
};
