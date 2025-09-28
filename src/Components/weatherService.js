// src/services/weatherService.js
// Mock service - Replace with actual OpenWeatherMap API calls
export const getWeatherData = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For demo purposes, we'll use mock data
  // In production, replace with actual API calls:
  /*
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Jalgaon,IN&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  */
  
  // Mock data matching the image
  return {
    current: {
      location: 'Wayanad, Kerala',
      temperature: '22°C',
      condition: 'Partly Cloudy',
      icon: '🌤️'
    },
    forecast: [
    { day: 'Today', rainfall: '50%', temperature: '10°C/30°C', icon: '🌤️', humidity: '65%', windSpeed: '12 km/h' },
      { day: '22 May', rainfall: '40%', temperature: '12°C/28°C', icon: '🌤️', humidity: '70%', windSpeed: '10 km/h' },
      { day: '23 May', rainfall: '60%', temperature: '14°C/26°C', icon: '🌧️', humidity: '80%', windSpeed: '15 km/h' },
      { day: '24 May', rainfall: '20%', temperature: '16°C/32°C', icon: '🌤️', humidity: '55%', windSpeed: '8 km/h' },
      { day: '25 May', rainfall: '10%', temperature: '18°C/34°C', icon: '⛅', humidity: '50%', windSpeed: '6 km/h' },
      { day: '26 May', rainfall: '30%', temperature: '17°C/31°C', icon: '🌤️', humidity: '60%', windSpeed: '9 km/h' },
  ]
  };
};

// Real API implementation example (uncomment and modify as needed):
/*
export const getRealWeatherData = async () => {
  const API_KEY = 'YOUR_API_KEY_HERE';
  const CITY = 'Jalgaon';
  const COUNTRY = 'IN';
  
  try {
    // Get current weather
    const currentResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&appid=${API_KEY}&units=metric`
    );
    
    // Get forecast
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${CITY},${COUNTRY}&appid=${API_KEY}&units=metric`
    );
    
    const currentData = await currentResponse.json();
    const forecastData = await forecastResponse.json();
    
    return processWeatherData(currentData, forecastData);
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};

const processWeatherData = (current, forecast) => {
  // Process the data to match our component structure
  return {
    current: {
      location: `${current.name}, ${current.sys.country}`,
      temperature: `${Math.round(current.main.temp)}°C`,
      condition: current.weather[0].description,
      icon: getWeatherIcon(current.weather[0].icon)
    },
    forecast: forecast.list.slice(0, 7).map(item => ({
      day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
      rainfall: `${Math.round(item.pop * 100)}%`,
      temperature: `${Math.round(item.main.temp_min)}°C/${Math.round(item.main.temp_max)}°C`,
      icon: getWeatherIcon(item.weather[0].icon)
    }))
  };
};

const getWeatherIcon = (code) => {
  const iconMap = {
    '01d': '☀️', '01n': '🌙',
    '02d': '⛅', '02n': '☁️',
    '03d': '☁️', '03n': '☁️',
    '04d': '☁️', '04n': '☁️',
    '09d': '🌧️', '09n': '🌧️',
    '10d': '🌦️', '10n': '🌧️',
    '11d': '⛈️', '11n': '⛈️',
    '13d': '❄️', '13n': '❄️',
    '50d': '🌫️', '50n': '🌫️'
  };
  return iconMap[code] || '🌤️';
};
*/