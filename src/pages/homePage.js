import React from "react";
import tramore1 from "../images/tramore1.jpg"
import tramore2 from "../images/tramore2.jpg"
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
        padding: "20px",
      },
  img: {
    maxHeight: 400,
  }
 }));

const HomePage = (props) => {
  const classes = useStyles();
  
  return (
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
        <Grid item>
        <img className={classes.img} alt="poiimage" src={tramore1}/>
        </Grid>
      </Grid>
   </>
 );
};
export default HomePage;