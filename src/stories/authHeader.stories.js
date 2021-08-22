import React from "react";
import AuthHeader from "../components/authHeader";
import { MemoryRouter } from "react-router";
import AuthProvider from "../contexts/authContext";

export default {
  title: "AuthHeader",
  component: AuthHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <AuthProvider>{Story()}</AuthProvider>,
  ],
};
  
export const Basic = () => {
  return <AuthProvider><AuthHeader/></AuthProvider>;
};
Basic.storyName = "Default";