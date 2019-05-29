import React from 'react';
import Fog from './elements/Fog';

export default props => {
  const { small } = props;
  const size = small ? 50 : 300;

  return (
    <svg viewBox="0 0 75 75" width={size} height={size}>
      <Fog speed={2} stagger={0.1} repeatDelay={0.3} {...props} />
    </svg>
  );
};
