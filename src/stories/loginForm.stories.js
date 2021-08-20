import React from "react";
import LoginForm from "../components/loginForm";

export default {
  title: "Login Page/LoginForm",
  component: LoginForm,
};

export const Basic = () => {
  return <LoginForm />;
};
Basic.storyName = "Default";