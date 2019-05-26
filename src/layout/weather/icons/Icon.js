import React from 'react';
import styled from 'styled-components';
import ClearSky from './ClarSky';
import FewClouds from './FewClouds';

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default props => {
  const { type } = props;

  return (
    <IconContainer>
      {(() => {
        switch (type) {
          case 'Clear': {
            return <ClearSky width={300} />;
          }
          case 'Clouds': {
            return <FewClouds />;
          }

          default: {
            return `icon for the ${type}`;
          }
        }
      })()}
    </IconContainer>
  );
};
