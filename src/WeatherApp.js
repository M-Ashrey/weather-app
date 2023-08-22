import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const API_KEY = '0476b6a5856f32b090c24198fdc2bef8'; // Replace with your API key

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeatherData}>Get Weather</button>
      <WeatherCard data={weatherData} /> {/* Render the WeatherCard component */}
    </div>
  );
};

export default WeatherApp;