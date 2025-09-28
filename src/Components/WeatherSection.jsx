// src/components/WeatherSection/WeatherSection.js
import React, { useState, useEffect, useRef } from 'react';
import { getWeatherData } from '../Components/weatherService';
import '../Styling/WeatherSection.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WeatherSection = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState(null);

  const sectionRef = useRef(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Animate section header
        gsap.from(".section-header h2", {
          y: -40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });

        // Animate current weather
        gsap.from(".current-weather", {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });

        // Animate forecast cards
        gsap.from(".forecast-card", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".forecast-grid",
            start: "top 85%",
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const fetchWeatherData = async () => {
    try {
      setError(null);
      const data = await getWeatherData();
      setWeatherData(data.forecast);
      setCurrentWeather(data.current);
    } catch (err) {
      setError(err.message);
      setSampleData();
    }
  };

  const setSampleData = () => {
    const sampleData = [
      { day: 'Today', rainfall: '50%', temperature: '10°C/30°C', icon: '🌤️', humidity: '65%', windSpeed: '12 km/h' },
      { day: '22 May', rainfall: '40%', temperature: '12°C/28°C', icon: '🌤️', humidity: '70%', windSpeed: '10 km/h' },
      { day: '23 May', rainfall: '60%', temperature: '14°C/26°C', icon: '🌧️', humidity: '80%', windSpeed: '15 km/h' },
      { day: '24 May', rainfall: '20%', temperature: '16°C/32°C', icon: '🌤️', humidity: '55%', windSpeed: '8 km/h' },
      { day: '25 May', rainfall: '10%', temperature: '18°C/34°C', icon: '⛅', humidity: '50%', windSpeed: '6 km/h' },
      { day: '26 May', rainfall: '30%', temperature: '17°C/31°C', icon: '🌤️', humidity: '60%', windSpeed: '9 km/h' },
    ];

    setWeatherData(sampleData);
    setCurrentWeather({
      location: 'Wayanad, Kerala',
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
    <section className="weather-section" ref={sectionRef}>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
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

      {day.humidity && (
        <div className="humidity">
          <span className="label">Humidity:</span>
          <span className="value">{day.humidity}</span>
        </div>
      )}
      {day.windSpeed && (
        <div className="wind">
          <span className="label">Wind:</span>
          <span className="value">{day.windSpeed}</span>
        </div>
      )}
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default WeatherSection;
