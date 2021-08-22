import React from "react";
import PoiListHeader from "../components/headerPoiList";
import { MemoryRouter } from "react-router";

export default {
  title: "Pois Page/Header",
  component: PoiListHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    //(Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <PoiListHeader title={'What we have so far...'} />;

Basic.storyName = "Default";