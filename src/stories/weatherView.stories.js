import React from "react";
import WeatherView from "../components/weatherView";
import SampleData from "./sampleWeather";

export default {
  title: "Poi View Page/Weather",
  component: WeatherView,
};

export const Basic = () => <WeatherView weather={SampleData} />;
Basic.storyName = "Default";