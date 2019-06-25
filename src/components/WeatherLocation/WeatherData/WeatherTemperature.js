import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, FOG } from '../../../constants/weathers';
import './weather-data.css';

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'day-cloudy',
    [RAIN]: 'day-rain',
    [SNOW]: 'day-snow',
    [WINDY]: 'day-windy',
    [SUN]: 'day-sunny',
    [FOG]: 'day-fog'
};

const getWeatherIcon = weatherState => {
    let icon = icons[weatherState];
    if (!icon) icon = 'day-sunny';
    const size = '4x';
    return <WeatherIcons className='w-icon' name={icon} size={size} />;
};

export default class WeatherTemperature extends Component {
    render() {
        const { temperature, weatherState } = this.props;
        return (
            <div className='weatherTemperatureCont'>
                {getWeatherIcon(weatherState)}
                <span className='temperature'>{temperature}</span>
                <span className='temperatureType'>°C</span>
            </div>
        );
    }
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired
};
