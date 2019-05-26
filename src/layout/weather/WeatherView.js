import React from 'react';
import WeatherNow from './now/WeatherNow';
import WeatherWeek from './week/WatherWeek';

export default props => {
  const {
    data: { now, week }
  } = props;

  return (
    <div>
      <WeatherNow {...now} />
      <WeatherWeek days={week} />
    </div>
  );
};
