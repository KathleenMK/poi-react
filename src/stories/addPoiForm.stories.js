import React from "react";
import AddPoiForm from "../components/addPoiForm";

export default {
  title: "Add Poi Page/AddPoiForm",
  component: AddPoiForm,
};

export const Basic = () => {
  return <AddPoiForm />;
};
Basic.storyName = "Default";