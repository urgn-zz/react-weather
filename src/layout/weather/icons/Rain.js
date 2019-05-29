import React from 'react';
import Rain from './elements/Rain';
import Cloud from './elements/WhiteCloud';

export default props => {
  const { small } = props;
  const size = small ? 50 : 300;

  return (
    <svg viewBox="0 0 75 75" width={size} height={size}>
      {small ? (
        <g>
          <Rain {...props} x={0} y={10} /> <Rain {...props} x={5} y={15} />
        </g>
      ) : (
        <Rain {...props} />
      )}
      <Cloud y={-5} />
    </svg>
  );
};
