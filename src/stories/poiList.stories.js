import React from "react";
import PoiList from "../components/poiList";
import SamplePoi from "./samplePoi";
import { MemoryRouter } from "react-router";

export default {
  title: "Pois Page/PoiList",
  component: PoiList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    //(Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};
 
/*Sometimes a component expects/requires a special component type to be above it in the component hierarchy. 
In storybook, we need to add a Decorator to the story to satisfy these requirements. 
A decorator wraps a story's component inside another component. The most common wrappers are Contexts and Routers.
Any component that uses the Link component needs to be wrapped inside a Router component. 
In the app code, the BrowserRouter component served this purpose. In Storybook, we can use MemoryRouter, which is more lightweight.*/

  const poisSample = [
    { ...SamplePoi, id: 1 },
    { ...SamplePoi, id: 2 },
    { ...SamplePoi, id: 3 },
  ]


export const Basic = () => <PoiList pois={poisSample}/>;

Basic.storyName = "Default";