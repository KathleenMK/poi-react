import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from '@material-ui/core';  //https://material-ui.com/api/text-field/
//import PrivateRoute from "./privateRoute";
//import AuthHeader from "./authHeader";
//import AuthProvider from "./authContext";
import Button from '@material-ui/core/Button';
import LoginForm from "../components/loginForm";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
      padding: "20px",
    },
  });

const LoginPage = (props) => {
  const classes = useStyles();
  const context = useContext(AuthContext);
  const [email] = useState('');
  const [password] = useState('');

  
  const handleSubmit = (emailEntered,passwordEntered) => {
    context.authenticate(emailEntered, passwordEntered);
    //context.authenticate(email, password);
    //context.authenticate("kate@gmail.com", "KateKate1");
    }
 
    // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  //const { from } = props.location.state || { from: { pathname: "/" } };
  //console.log(from);
 
 
  return context.isAuthenticated ? (
    <Redirect to={"/pois"} />
  ) : (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
    <Grid container spacing={1}>
     <Grid item xs={2}>
      <LoginForm
        onUserSubmit={handleSubmit}
        emailEntered={email}
        passwordEntered={password}
      />
      </Grid>
    </Grid>
    </>
  );
};

export default LoginPage;
