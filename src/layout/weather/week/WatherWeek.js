import React from 'react';
import styled from 'styled-components';
import DayOfWeek from './DayOfWeek';

const Days = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row nowrap;
  justify-content: center;
  padding-bottom: 24px;
`;

export default props => {
  const { days } = props;

  return (
    <Days>
      {days.map(day => (
        <DayOfWeek key={day.date.getTime()} {...day} />
      ))}
    </Days>
  );
};
