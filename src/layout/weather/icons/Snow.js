import React from 'react';
import Snow from './elements/Snow';
import Cloud from './elements/WhiteCloud';

export default props => {
  const { small } = props;
  const size = small ? 50 : 300;
  const snowY = small ? 20 : 8;

  return (
    <svg viewBox="0 0 80 80" width={size} height={size}>
      <Snow {...props} y={snowY} />
      <Cloud y={-5} />
    </svg>
  );
};
