import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const Toolbar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ToolbarButton = styled(Button)`
  && {
    margin: 12px;
  }
`;

const MidlleButton = styled(ToolbarButton)`
  && {
    flex-grow: 1;
    margin: 12px 0px 12px 0;
  }
`;

export default props => {
  const { onCogClicked, onPrev, onNext } = props;

  return (
    <Toolbar>
      <ToolbarButton onClick={() => onPrev()}>{'<'}</ToolbarButton>
      <MidlleButton onClick={() => onCogClicked()}>Settings</MidlleButton>
      <ToolbarButton onClick={() => onNext()}>{'>'}</ToolbarButton>
    </Toolbar>
  );
};
