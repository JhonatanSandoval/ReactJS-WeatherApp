import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './weather-data.css';

export default class WeatherData extends Component {
    render() {
        const { temperature, weatherState, humidity, wind } = this.props.data;
        return (
            <div className='weatherDataCont'>
                <WeatherTemperature temperature={temperature} weatherState={weatherState} />
                <WeatherExtraInfo humidity={humidity} wind={wind} />
            </div>
        );
    }
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};
