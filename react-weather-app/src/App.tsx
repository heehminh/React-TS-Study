import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import InsertCityName from "./components/InsertCityName";
import PrintWeather from "./components/PrintWeather";
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

  return (
    <Container>
      <Box>
        <ProjectTitle>WEATHER PROJECT</ProjectTitle>
        <InsertCityName setCityName={setCityName} />
        <PrintWeather weather={weather} />
      </Box>
    </Container>
  );
};

export default App;

const Container = styled.div``;
const Box = styled.div``;
const ProjectTitle = styled.h1``;
