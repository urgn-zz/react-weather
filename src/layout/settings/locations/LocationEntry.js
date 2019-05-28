import React from 'react';
import styled from 'styled-components';

const Entry = styled.div`
  margin-bottom: 4px;
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
  const { id, name, country, onRemove } = props;
  return (
    <Entry>
      <EntryName>
        {name} [{country}]
      </EntryName>
      <EntryRemove>
        <RemButton onClick={() => onRemove(id)}>DELETE</RemButton>
      </EntryRemove>
    </Entry>
  );
};
