import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reverse } from 'ramda';
import styled from 'styled-components';
import ReactSwipe from 'react-swipe';
import { setActiveView, setActiveCityIndex } from '../../state/layout/actions';
import WeatherView from '../weather/WeatherView';
import VIEWS from '../views';
import WeatherNavigation from './WaetherNavigation';

const SliederContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
    justify-content: center;
`;

const CarouselContainer = styled.div`
justify-content: center;
  flex-grow: 1;
`;

const Slider = props => {
  const { cityIndex, cityList } = props;
  const list = reverse(cityList);
  let reactSwipeEl;
  return (
    <SliederContainer>
      <WeatherNavigation
        onCogClicked={() => props.setActiveView(VIEWS.SETTINGS)}
        onNext={() => reactSwipeEl.next()}
        onPrev={() => reactSwipeEl.prev()}
        activeCityIndex={cityIndex}
        activeCityList={list}
      />
      <CarouselContainer>
        <div>
        <ReactSwipe
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}
        >
          {list.map(city => (
            <div key={city.id}>
              <WeatherView cityId={city.id} />
            </div>
          ))}
        </ReactSwipe>
        </div>
      </CarouselContainer>
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
