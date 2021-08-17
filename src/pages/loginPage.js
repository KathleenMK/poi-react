import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from '@material-ui/core';  //https://material-ui.com/api/text-field/
//import PrivateRoute from "./privateRoute";
//import AuthHeader from "./authHeader";
//import AuthProvider from "./authContext";

const useStyles = makeStyles({
    root: {
      padding: "20px",
    },
  });

const LoginPage = (props) => {
    const classes = useStyles();
  const context = useContext(AuthContext);
  //const email="";
  //const password="";

  const login = () => {
    //const username = Math.random().toString(36).substring(7);
    context.authenticate("kate@gmail.com", "KateKate1");
    //context.authenticate(email, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };
  console.log(from);

  return context.isAuthenticated ? (
    <Redirect to={from} />
  ) : (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      {/* Login web form  
      https://material-ui.com/components/text-fields/*/}
      
      <button onClick={login}>Submit</button>
    </>
  );
};

export default LoginPage;
