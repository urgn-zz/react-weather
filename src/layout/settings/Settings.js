/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reverse } from 'ramda';
import styled from 'styled-components';
import { setActiveView } from '../../state/layout/actions';
import {
  requestLocationAdd,
  removeLocation
} from '../../state/locations/actions';
import VIEWS from '../views';
import LocationInput from './locations/LocationInput';
import LocationsList from './locations/LocationsList';

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const Header = styled.div`
  text-align: center;
  font-size: 2.8em;
  color: #999;
  padding: 12px 0;
`;

const Settings = props => {
  const { isRequesting, list } = props;
  return (
    <SettingsContainer>
      <button
        onClick={() => {
          props.setActiveView(VIEWS.WEATHER);
        }}
      >
        BACK
      </button>
      <Header>Add city</Header>
      <LocationInput add={props.requestLocationAdd} adding={isRequesting} />
      <LocationsList
        items={reverse(list)}
        onRemove={id => {
          props.removeLocation(id);
        }}
      />
    </SettingsContainer>
  );
};

function mapStateToProps(state) {
  return {
    list: state.location.locations,
    isRequesting: state.location.request.processing
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setActiveView,
      requestLocationAdd,
      removeLocation
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
