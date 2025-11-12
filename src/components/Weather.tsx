import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  icon: string;
}

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        // Using Open-Meteo API (free, no API key required)
        const response = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`
        );

        const data = response.data;

        // Map weather codes to conditions (simplified)
        const weatherCodes: { [key: number]: string } = {
          0: 'Clear',
          1: 'Mainly Clear',
          2: 'Partly Cloudy',
          3: 'Overcast',
          45: 'Fog',
          48: 'Depositing Rime Fog',
          51: 'Light Drizzle',
          53: 'Moderate Drizzle',
          55: 'Dense Drizzle',
          56: 'Light Freezing Drizzle',
          57: 'Dense Freezing Drizzle',
          61: 'Slight Rain',
          63: 'Moderate Rain',
          65: 'Heavy Rain',
          66: 'Light Freezing Rain',
          67: 'Heavy Freezing Rain',
          71: 'Slight Snow Fall',
          73: 'Moderate Snow Fall',
          75: 'Heavy Snow Fall',
          77: 'Snow Grains',
          80: 'Slight Rain Showers',
          81: 'Moderate Rain Showers',
          82: 'Violent Rain Showers',
          85: 'Slight Snow Showers',
          86: 'Heavy Snow Showers',
          95: 'Thunderstorm',
          96: 'Thunderstorm with Slight Hail',
          99: 'Thunderstorm with Heavy Hail'
        };

        const condition = weatherCodes[data.current_weather.weathercode] || 'Unknown';

        // For icons, we'll use a simple emoji-based approach since Open-Meteo doesn't provide icons
        const getWeatherIcon = (code: number) => {
          if (code === 0 || code === 1) return '☀️'; // Clear
          if (code >= 2 && code <= 3) return '⛅'; // Cloudy
          if (code >= 45 && code <= 48) return '🌫️'; // Fog
          if (code >= 51 && code <= 67) return '🌧️'; // Rain
          if (code >= 71 && code <= 86) return '❄️'; // Snow
          if (code >= 95) return '⛈️'; // Thunderstorm
          return '🌤️'; // Default
        };

        setWeather({
          location: `${lat.toFixed(2)}, ${lon.toFixed(2)}`, // Open-Meteo doesn't provide location name, so use coords
          temperature: Math.round(data.current_weather.temperature),
          condition: condition,
          icon: getWeatherIcon(data.current_weather.weathercode)
        });
      } catch (err) {
        setError('Unable to fetch weather');
        console.error('Weather fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (err) => {
            console.error('Geolocation error:', err);
            setError('Location access denied');
            setLoading(false);
          }
        );
      } else {
        setError('Geolocation not supported');
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center space-x-2 text-gray-600">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center space-x-2 text-gray-600">
        <span className="text-sm">Weather unavailable</span>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="flex items-center space-x-2 text-gray-700">
      <span className="text-lg">{weather.icon}</span>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{weather.location}</span>
        <div className="flex items-center space-x-1">
          <span className="text-xs">{weather.temperature}°C</span>
          <span className="text-xs text-gray-500">{weather.condition}</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
