import React from 'react';
import Rain from './elements/Rain';
import Cloud from './elements/WhiteCloud';
import Thunder from './elements/Thunder';

export default props => {
  const { small } = props;
  const size = small ? 50 : 300;

  return (
    <svg viewBox="0 0 80 80" width={size} height={size}>
      {small ? (
        <g>
          <Rain {...props} x={0} y={10} /> <Rain {...props} x={5} y={15} />
        </g>
      ) : (
        <Rain {...props} />
      )}
      <Thunder {...props} y={-5} x={-7} scale={1.3} />
      <Cloud y={-5} />
    </svg>
  );
};
