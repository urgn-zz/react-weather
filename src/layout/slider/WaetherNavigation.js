import React from 'react';
import styled from 'styled-components';

const SettingsButton = styled.button``;

export default props => {
  const {
    onCogClicked,
    onCityIndexChanged,
    activeCityIndex,
    activeCityList
  } = props;

  return (
    <div>
      <SettingsButton
        disabled={activeCityIndex <= 0}
        onClick={() => {
          onCityIndexChanged(activeCityIndex - 1);
        }}
      >
        {'<'}
      </SettingsButton>
      <SettingsButton onClick={() => onCogClicked()}>COG</SettingsButton>
      <SettingsButton
        disabled={activeCityIndex >= activeCityList.length - 1}
        onClick={() => {
          onCityIndexChanged(activeCityIndex + 1);
        }}
      >
        {'>'}
      </SettingsButton>
    </div>
  );
};
