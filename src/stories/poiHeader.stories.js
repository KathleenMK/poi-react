import React from "react";
import PoiHeader from "../components/headerPoi";
import SamplePoi from "./sampleData";

export default {
  title: "Poi View Page/PoiHeader",
  component: PoiHeader,
};

export const Basic = () => <PoiHeader poi={SamplePoi} />;
Basic.storyName = "Default";