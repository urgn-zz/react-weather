import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map, values } from 'ramda';
import styled from 'styled-components';
import { setActiveView } from '../../state/layout/actions';
import VIEWS from '../views';
import WeatherView from '../weather/WeatherView';

const SliederContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const SettingsButton = styled.button``;

const Slider = props => {
  const { weather } = props;

  return (
    <SliederContainer>
      <SettingsButton
        onClick={() => {
          props.setActiveView(VIEWS.SETTINGS);
        }}
      >
        {'COG'}
      </SettingsButton>
      {values(
        map(data => {
          return <WeatherView data={data} />;
        }, weather)
      )}
    </SliederContainer>
  );
};

function mapStateToProps(state) {
  return {
    weather: state.apiData.weather
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setActiveView
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider);
