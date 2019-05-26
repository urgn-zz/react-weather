import React from 'react';
import styled from 'styled-components';
import LocationEntry from './LocationEntry';

const List = styled.div``;

export default () => {
  const { items, onRemove } = props;

  return (
    <List>
      {items.map(item => (
        <LocationEntry onRemove={onRemove} {...item} />
      ))}
    </List>
  );
};
