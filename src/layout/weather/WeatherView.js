import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WeatherNow from './now/WeatherNow';
import WeatherWeek from './week/WatherWeek';
import { actionGetWeatherData } from '../../state/api/actions';

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
    return 'Loading...';
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
