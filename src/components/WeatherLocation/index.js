import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './weather-location.css';
import transformWeather from './../../services/transformWeather';
import endpoint from './../../constants/api_url';

export default class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Lima',
            data: null
        };
        console.log('constructor');
        this.handleClick();
    }

    handleClick = () => {
        console.log('handleClick presionado ********');
        fetch(endpoint)
            .then(resolve => resolve.json())
            .then(data => {
                const newWeather = transformWeather(data);
                this.setState({ data: newWeather });
            });
    };

    render() {
        console.log('render');
        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city} />
                {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
            </div>
        );
    }
}
