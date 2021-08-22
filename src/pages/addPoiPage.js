import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import AddPoiForm from "../components/addPoiForm";
import Grid from "@material-ui/core/Grid";
import tramore2 from "../images/tramore2.jpg"
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from "@material-ui/core/styles";
import { addPoi } from "../api/poi-api.js";

const useStyles = makeStyles((theme) => ({
  root: {
        padding: "20px",
      },
   }));

const AddPoiPage = (props) => {
  const classes = useStyles();
  //const context = useContext(AuthContext);
  const [name] = useState('');
  const [descshort] = useState('');
  const [desc] = useState('');
  const [latitude] = useState('');
  const [longitude] = useState('');
  const [category] = useState("0");

  const handleSubmit = (name, descshort, desc, latitude, longitude, category) => {
    console.log("in add poi handler")
    const addedPoi = addPoi(name, descshort, desc, latitude, longitude, category);
    console.log(addedPoi);
    //context.authenticate(emailEntered, passwordEntered);
    //context.authenticate(email, password);
    //context.authenticate("kate@gmail.com", "KateKate1");
    }
 
    // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  //const { from } = props.location.state || { from: { pathname: "/" } };
  //console.log(from);
 
 
  return (
    
    <>
    <Card className={classes.root}>
    <CardMedia
       component="img"
       alt="tramore2"
       height="200"
       image={tramore2}
       title="tramore2"
    />
   </Card>
    <Grid container className={classes.root} spacing={1} justifyContent="center">
     <Grid item xs={2}>
      <AddPoiForm
        onUserSubmit={handleSubmit}
        name = {name}
        descshort = {descshort}
        desc = {desc}
        latitude = {latitude}
        longitude = {longitude}
        category = {category}
        />
      </Grid>
    </Grid>
    </>
  );
};

export default AddPoiPage;
