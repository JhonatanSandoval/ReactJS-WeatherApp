import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './weather-location.css';

export default class WeatherLocation extends Component {
    render() {
        return (
            <div className='weatherLocationCont'>
                <Location city={'Lima'} />
                <WeatherData />
            </div>
        );
    }
}
