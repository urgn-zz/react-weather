import React from 'react';
import styled from 'styled-components';

const Entry = styled.div`
  display: flex;
  flex-direction: row;
`;

const EntryName = styled.div`
  display: flex;
  flex-grow: 1;
`;

const EntryRemove = styled.div`
  display: flex;
  flex-grow: 0;
`;

const RemButton = styled.button``;

export default props => {
  const { id, name, onRemove } = props;
  return (
    <Entry>
      <EntryName>{name}</EntryName>
      <EntryRemove>
        <RemButton onClick={() => onRemove(id)}>DELETE</RemButton>
      </EntryRemove>
    </Entry>
  );
};
