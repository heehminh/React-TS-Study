import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import InsertCityName from "./components/InsertCityName";
import PrintWeather from "./components/PrintWeather";
import { WeatherData } from "./type/types";
import Clouds from "./assets/cloud.jpg";
import Clear from "./assets/clear.jpg";
import Rain from "./assets/rain.jpg";
import Drizzle from "./assets/drizzle.jpg";
import Snow from "./assets/snow.jpg";
import Thunderstorm from "./assets/thunderstorm.jpg";

const weatherImg: {
  [key: string]: string;
} = {
  Clouds: Clouds,
  Clear: Clear,
  Rain: Rain,
  Drizzle: Drizzle,
  Snow: Snow,
  Thunderstorm: Thunderstorm,
};

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
    <Container img={weatherImg[weatherName]}>
      <Box>
        <ProjectTitle>WEATHER PROJECT</ProjectTitle>
        <InsertCityName setCityName={setCityName} />
        <PrintWeather weather={weather} />
      </Box>
    </Container>
  );
};

export default App;

interface ContainerProps {
  img: string | undefined;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.img});
`;
const Box = styled.div``;
const ProjectTitle = styled.h1``;
