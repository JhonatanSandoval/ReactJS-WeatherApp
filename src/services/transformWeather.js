import convert from 'convert-units';
import { SUN, WINDY } from './../constants/weathers';

const getTemp = kelvin => {
    return Number(
        convert(kelvin)
            .from('K')
            .to('C')
            .toFixed(2)
    );
};

const getWeatherState = weatherData => {
    return SUN;
};

const transformWeather = weatherData => {
    const { humidity, temp } = weatherData.main;
    const { speed } = weatherData.wind;
    const weatherState = getWeatherState(weatherData);
    return {
        humidity: humidity,
        temperature: getTemp(temp),
        weatherState,
        wind: `${speed} m/s`
    };
};

export default transformWeather;
