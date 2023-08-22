import React from 'react';

const WeatherCard = ({ data }) => {
  if (!data) {
    return null; // Return early if data is not available
  }

  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
