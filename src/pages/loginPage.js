import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import LoginForm from "../components/loginForm";
import Grid from "@material-ui/core/Grid";
import tramore2 from "../images/tramore2.jpg"
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
        padding: "20px",
      },
   }));

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
     <Card className={classes.root}>
    <CardMedia
       component="img"
       alt="tramore2"
       height="300"
       image={tramore2}
       title="tramore2"
    />
   </Card>
    <Grid container className={classes.root} spacing={1} justifyContent="center">
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
