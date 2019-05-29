import React from 'react';
import styled from 'styled-components';

const SettingsButton = styled.button``;

export default props => {
  const { onCogClicked, onPrev, onNext } = props;

  return (
    <div>
      <SettingsButton onClick={() => onPrev()}>{'<'}</SettingsButton>
      <SettingsButton onClick={() => onCogClicked()}>Settings</SettingsButton>
      <SettingsButton onClick={() => onNext()}>{'>'}</SettingsButton>
    </div>
  );
};
