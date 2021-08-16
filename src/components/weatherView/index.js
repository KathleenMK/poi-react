import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const WeatherView = ( props) => {
  const classes = useStyles();
  const weather = props.weather

  return (
    <>
      <Typography variant="h5" component="h3">Current Weather:
      </Typography>

      <Typography variant="h6" component="p">
        <p>Clouds: {weather.clouds}</p>
        <p>Temperature: {weather.temperature} C</p>
        <p>Feels Like: {weather.feelsLike} C</p>
        <p>Wind Speed: {weather.windSpeed}</p>
        <p>Humidity: {weather.humidity}%</p>
       </Typography>
      

       {/*}
       <img className={classes.img} alt="complex" src={poi.imageurl}/>
        <Paper component="ul" className={classes.root}>
        <Chip icon={<AccessTimeIcon />} label={`${poi.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${poi.category.name}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${poi.vote_average} (${poi.vote_count}`}
        />
        <Chip label={`Released: ${poi.release_date}`} />
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
  */}
      </>
  );
};
export default  WeatherView ;