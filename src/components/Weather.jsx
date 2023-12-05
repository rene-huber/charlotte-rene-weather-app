import React, { useState, useEffect } from "react";

const WeatherFetch = ({ onWeatherUpdate }) => {
  const WEATHER_API_URL = "https://example-apis.vercel.app/api/weather";

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(WEATHER_API_URL);
        const weatherData = await response.json();
        onWeatherUpdate(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchWeather();
    const interval = setInterval(fetchWeather, 5000);

    return () => clearInterval(interval);
  }, [onWeatherUpdate]);

  return null; // Este componente no renderiza nada visualmente
};

export default WeatherFetch;
