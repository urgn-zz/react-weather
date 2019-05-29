import React from 'react';
import styled from 'styled-components';
import LocationEntry from './LocationEntry';

const List = styled.div`
  padding: 12px 8px;
  font-size: 1.2em;
`;

export default props => {
  const { items, onRemove } = props;

  return (
    <List>
      {items.map(item => (
        <LocationEntry key={item.id} onRemove={onRemove} {...item} />
      ))}
    </List>
  );
};
