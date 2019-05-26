import React from 'react';
import styled from 'styled-components';
import Icon from '../icons/Icon';

const DayCol = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  text-align: center;
`;

const DayName = styled.div`
  color: #999;
`;

const DayTemp = styled.div`
  color: #fff;
  ::after {
    content: '°C';
  }
`;

const DayIcon = styled.div``;

export default props => {
  const { date, temperature, conditions } = props;
  return (
    <DayCol>
      <DayName>
        {date.toLocaleString(window.navigator.language, { weekday: 'short' })}
      </DayName>
      <DayTemp>{Math.ceil(temperature)}</DayTemp>
      <DayIcon>
        <Icon type={conditions} animated={false} small />
      </DayIcon>
      <DayName>{conditions}</DayName>
    </DayCol>
  );
};
