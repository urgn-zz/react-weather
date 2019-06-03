import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import WeatherNow from './now/WeatherNow';
import WeatherWeek from './week/WatherWeek';
import { actionGetWeatherData } from '../../state/api/actions';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class WeatherView extends Component {
  componentDidMount() {
    const { weather, getWeather, cityId } = this.props;

    if (!weather) {
      getWeather(cityId);
    }
  }

  render() {
    const { weather } = this.props;
    if (weather) {
      const { now, week } = weather;

      return (
        <>
          <WeatherNow {...now} />
          <WeatherWeek days={week} />
        </>
      );
    }
    return (
      <LoadingContainer>
        <ReactLoading type="bubbles" />
      </LoadingContainer>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    weather: state.apiData.weather[ownProps.cityId]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getWeather: actionGetWeatherData
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherView);
