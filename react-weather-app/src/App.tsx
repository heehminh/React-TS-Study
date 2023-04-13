import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { WeatherData } from "./type/types";

const api = {
  url: process.env.REACT_APP_API_URL,
  api_key: process.env.REACT_APP_WEATHER_API_KEY,
};

const App = () => {
  const [cityName, setCityName] = useState("seoul");
  const [weather, setWeather] = useState<WeatherData>();
  const [weatherName, setWeatherName] = useState("");

  const getWeather = async () => {
    const response = await axios.get(
      `${api.url}?q=${cityName}&appid=${api.api_key}`
    );

    console.log(response);
    setWeather(response.data);
    setWeatherName(response.data.weather[0].main);
  };

  useEffect(() => {
    getWeather();
  }, [cityName]);

  return <div>App</div>;
};

export default App;
