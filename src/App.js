import React, { Component } from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation/index';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                Weather app :D
                <WeatherLocation />
            </div>
        );
    }
}
