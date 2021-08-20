import React from "react";
import AuthHeader from "../components/authHeader";
import { MemoryRouter } from "react-router";


export default {
  title: "AuthHeader",
  component: AuthHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    //(Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

const isAuthenticated = true;
  
export const Basic = () => {
  return <AuthHeader/>;
};
Basic.storyName = "Default";