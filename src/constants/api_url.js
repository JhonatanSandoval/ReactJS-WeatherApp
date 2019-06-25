const location = 'Lima,pe';
const api_key = 'f0a43f0e11d53569b0ea93afb120da35';
const base_url = 'https://api.openweathermap.org/data/2.5/weather';
const endpoint = `${base_url}?q=${location}&appid=${api_key}`;

export default endpoint;
