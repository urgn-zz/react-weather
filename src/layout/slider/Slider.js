import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reverse } from 'ramda';
import styled from 'styled-components';
import { setActiveView, setActiveCityIndex } from '../../state/layout/actions';
import WeatherView from '../weather/WeatherView';
import WeatherNavigation from './WaetherNavigation';
import VIEWS from '../views';

const SliederContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const Slider = props => {
  const { cityIndex, cityList } = props;
  const list = reverse(cityList);
  return (
    <SliederContainer>
      <WeatherNavigation
        onCogClicked={() => props.setActiveView(VIEWS.SETTINGS)}
        onCityIndexChanged={index => props.setActiveCityIndex(index)}
        activeCityIndex={cityIndex}
        activeCityList={list}
      />
      <WeatherView cityId={list[cityIndex].id} />
    </SliederContainer>
  );
};

function mapStateToProps(state) {
  return {
    weather: state.apiData.weather,
    cityIndex: state.layout.activeCityIndex,
    cityList: state.location.locations
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setActiveView,
      setActiveCityIndex
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider);
