import React from 'react';
import Rain from './elements/Rain';
import Cloud from './elements/WhiteCloud';

export default props => {
  return (
    <svg viewBox="0 0 75 75" width="300" height="300">
      <Rain {...props} x={-5} />
      <Cloud y={-5} />
    </svg>
  );
};
