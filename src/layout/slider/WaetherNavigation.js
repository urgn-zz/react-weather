import React from 'react';
import styled from 'styled-components';

const SettingsButton = styled.button``;

export default props => {
  const {
    onCogClicked,
    onPrev,
    onNext,
    activeCityIndex,
    activeCityList
  } = props;

  return (
    <div>
      <SettingsButton
        onClick={() => onPrev()}
      >
        {'<'}
      </SettingsButton>
      <SettingsButton onClick={() => onCogClicked()}>COG</SettingsButton>
      <SettingsButton
        onClick={() => {
          onNext()
        }}
      >
        {'>'}
      </SettingsButton>
    </div>
  );
};
