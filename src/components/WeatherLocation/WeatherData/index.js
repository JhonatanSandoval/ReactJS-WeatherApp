import React, { Component } from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { SUN } from './../../../constants/weathers';
import './weather-data.css';

export default class WeatherData extends Component {
    render() {
        return (
            <div className='weatherDataCont'>
                <WeatherTemperature temperature={20} weatherState={SUN} />
                <WeatherExtraInfo humidity={80} wind={'10 m/s'} />
            </div>
        );
    }
}
