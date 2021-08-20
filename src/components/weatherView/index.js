import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
   // display: "flex",
    padding: "20px",
    variant:'outlined'
  },
 }));

const WeatherView = ( props) => {
  const classes = useStyles();
  const weather = props.weather

  return (
    
    <>
      <Grid container spacing={1}>       
        <Paper className={classes.root}>
          <Grid item>
            <Typography variant="h6"><em>Current Weather:</em></Typography><br></br>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              <em>Clouds:</em> {weather.clouds}<br></br>
              <em>Temperature:</em> {weather.temperature}C<br></br>
              <em>Feels Like:</em> {weather.feelsLike}C<br></br>
              <em>Wind Speed:</em> {weather.windSpeed}<br></br>
              <em>Humidity:</em> {weather.humidity}%<br></br>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
     </>
  );
};
export default  WeatherView ;