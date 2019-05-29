// http://preview.codecanyon.net/item/animated-svg-weather-icons/full_screen_preview/12631845

import React from 'react';
import styled from 'styled-components';
import Icon from '../icons/Icon';

const WeatherNow = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
  justify-content: center;
`;

const CityName = styled.div`
  font-size: 2.4em;
  color: #999;
`;

const Temperature = styled.div`
  font-size: 3.2em;
  ::after {
    content: '°C';
  }
`;

export default props => {
  const { location, temperature, conditions } = props;

  return (
    <WeatherNow>
      <CityName>{location}</CityName>
      <Temperature>{Math.ceil(temperature)}</Temperature>
      <Icon type={conditions} animated />
    </WeatherNow>
  );
};
