import React from "react";
import PoiCard from "../components/poiCard";
import SampleMovie from "./sampleMovie";
import SamplePoi from "./sampleData";

export default {
  title: "Pois Page/PoiCard",
  component: PoiCard,
};

export const Basic = () => {
  return (
    <PoiCard
      poi={SamplePoi}
    />
  );
};
Basic.storyName = "Default";

export const BasicMovie = () => {
  return (
    <PoiCard
      poi={SampleMovie}
    />
  );
};
BasicMovie.storyName = "DefaultMovie";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
  return (
    <PoiCard
      poi={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exceptionMovie";