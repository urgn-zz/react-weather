import React from 'react';
import Sun from './elements/Sun';

export default props => {
  const { small, ref } = props;

  return (
    <svg
      ref={ref}
      viewBox="0 0 70 70"
      width={small ? 50 : 300}
      height={small ? 50 : 300}
    >
      <Sun {...props} />
    </svg>
  );
};
