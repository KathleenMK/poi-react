import React from "react";
import PoiView from "../components/poiView";
import SampleData from "./samplePoi";

export default {
  title: "Poi View Page/PoiView",
  component: PoiView,
};

export const Basic = () => <PoiView poi={SampleData} />;
Basic.storyName = "Default";