import React from "react";
import PoiListHeader from "../components/headerPoiList";

export default {
  title: "Pois Page/Header",
  component: PoiListHeader,
};

export const Basic = () => <PoiListHeader title={'What we have so far...'} />;

Basic.storyName = "Default";