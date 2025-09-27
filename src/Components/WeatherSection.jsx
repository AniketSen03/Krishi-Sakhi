// src/components/WeatherSection/WeatherSection.js
import React, { useState, useEffect } from 'react';
import { getWeatherData } from '../Components/weatherService';
import '../Styling/WeatherSection.css';

const WeatherSection = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      setError(null);
      const data = await getWeatherData();
      setWeatherData(data.forecast);
      setCurrentWeather(data.current);
    } catch (err) {
      setError(err.message);
      // Fallback to sample data
      setSampleData();
    }
  };

  const setSampleData = () => {
    const sampleData = [
      { day: 'Today', rainfall: '50%', temperature: '10°C/30°C', icon: '🌤️' },
      { day: '22 May', rainfall: '50%', temperature: '10°C/30°C', icon: '🌤️' },
      { day: '23 May', rainfall: '50%', temperature: '10°C/30°C', icon: '🌧️' },
      { day: '24 May', rainfall: '50%', temperature: '10°C/30°C', icon: '🌤️' },
      { day: '25 May', rainfall: '50%', temperature: '10°C/30°C', icon: '⛅' },
      { day: '26 May', rainfall: '50%', temperature: '10°C/30°C', icon: '🌤️' },
    ];
    setWeatherData(sampleData);
    setCurrentWeather({
      location: 'Jalgaon, Maharashtra',
      temperature: '22°C',
      condition: 'Partly Cloudy',
      icon: '🌤️'
    });
  };

  const getWeatherInsight = () => {
    if (!weatherData.length) return '';

    const today = weatherData[0];
    if (today.rainfall.includes('50') || today.rainfall.includes('60')) {
      return 'Moderate rainfall expected. Good for irrigation planning.';
    }
    return 'Weather conditions are favorable for farming activities.';
  };

  return (
    <section className="weather-section">
      <div className="section-header">
        <h2>Weather Forecast</h2>

      </div>

      {error && (
        <div className="error-message">
          ⚠️ {error}. Showing sample data.
        </div>
      )}

      <div className="weather-content">
        <div className="current-weather">
          <div className="location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            {currentWeather?.location || 'Wayanad, Kerala'}
          </div>
          <div className="current-info">
            <div className="temperature">
              <span className="icon">{currentWeather?.icon}</span>
              <span className="value">{currentWeather?.temperature}</span>
            </div>
            <div className="condition">{currentWeather?.condition}</div>
          </div>
          <div className="weather-insight">
            <strong>Farming Insight:</strong> {getWeatherInsight()}
          </div>
        </div>

        <div className="forecast">
          <h3>7-Day Forecast</h3>
          <div className="forecast-grid">
            {weatherData.map((day, index) => (
              <div key={index} className="forecast-card">
                <div className="day">{day.day}</div>
                <div className="weather-icon">{day.icon}</div>
                <div className="rainfall">
                  <span className="label">Rain:</span>
                  <span className="value">{day.rainfall}</span>
                </div>
                <div className="temperature-range">{day.temperature}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;
