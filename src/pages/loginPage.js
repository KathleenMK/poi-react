import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from '@material-ui/core';  //https://material-ui.com/api/text-field/
//import PrivateRoute from "./privateRoute";
//import AuthHeader from "./authHeader";
//import AuthProvider from "./authContext";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      padding: "20px",
    },
  });

const LoginPage = (props) => {
    const classes = useStyles();
  const context = useContext(AuthContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // https://www.w3schools.com/react/react_forms.asp
  // https://material-ui.com/components/text-fields/
  // used this article's example as a basis for the login form:
  // https://levelup.gitconnected.com/create-a-signup-page-with-react-and-material-ui-9b203d18cf3f visited 18Aug21
  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    context.authenticate(email, password);
    //context.authenticate("kate@gmail.com", "KateKate1");
    }
 
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
     
       <form className={classes.root} onSubmit={handleSubmit}>
         <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
       <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </div>
    </form>
    </>
  );
};

export default LoginPage;
