import React from "react";
import PoiHeader from "../components/headerPoi";
import SamplePoi from "./samplePoi";
import { MemoryRouter } from "react-router";

export default {
  title: "Poi View Page/PoiHeader",
  component: PoiHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    //(Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <PoiHeader poi={SamplePoi} />;
Basic.storyName = "Default";