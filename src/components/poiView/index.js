import React from "react";
import Paper from "@material-ui/core/Paper";
//import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "20px",
    variant:'outlined'
  },
  img: {
    maxHeight: 500,
  }
 /*fab not currently used
  fab: {
    position: "fixed",
       bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  */
}));

const PoiView = ( props) => {
  const classes = useStyles();
  const poi = props.poi

  //https://material-ui.com/api/typography/
  //https://material-ui.com/api/grid/

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5"><em>{poi.name}</em></Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item>
          <Typography variant="body1">{poi.description}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="center">
        <Grid item>
        <img className={classes.img} src={poi.imageurl}/>
        </Grid>
      </Grid>
      
      <Grid container spacing={1}>  
      <Grid item xs={4}>
          <Paper className={classes.root}>
            <Typography variant="subtitle1">
            <em>Short Description:</em><br></br> {poi.descshort} 
            </Typography>
          </Paper>
        </Grid>     
        <Grid item xs={4}>
          <Paper className={classes.root}>
            <Typography variant="subtitle1">
            <em>Category:</em> {poi.category.name} <br></br>
            <em>Added By:</em> {poi.contributor.firstName} {poi.contributor.lastName}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.root} >
            <Typography variant="subtitle1">
            <em>Latitude:</em> {poi.latitude} <br></br>
            <em>Longitude:</em> {poi.longitude}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
        
{/*
      <Fab
        color="secondary"
        variant="extended"
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab> */}

  </>
  );
};
export default  PoiView ;