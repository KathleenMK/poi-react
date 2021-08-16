import React, {useState, useEffect} from "react";
import PoiHeader from "../components/headerPoi/";
import PoiView from "../components/poiView/";
import WeatherView from "../components/weatherView/";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import axios from "axios";

const baseurl = "https://lit-hamlet-10675.herokuapp.com";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: "100vh",
  },
}));

const PoiViewPage = (props) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.poi;  // login JWT used in following axios calls
  const classes = useStyles();
  const { id } = props.match.params;  //allows the component to extract the id from the browser's parameterized URL address.
  const [poi, setPoi] = useState(null);
  const [weather, setWeather] = useState( [] );
  const [user, setUser] = useState({ username: null, password: null });
 
 useEffect(() => {
    async function fetchData() {
    const poiOne = await axios.get(baseurl+'/api/pois/'+id);
    console.log(poiOne.data);
    console.log(poiOne.data.poi);
    console.log(poiOne.data.weather);
    setPoi(poiOne.data.poi);  //also getting weather
    setWeather(poiOne.data.weather);  
     }
  fetchData();
    // eslint-disable-next-li
  }, []); //empty dependency array ensures rendering onMount only
  return (
    <>
      {poi ? (
        <>
          <PoiHeader poi={poi} />
          <Grid container spacing={5} style={{ padding: "15px" }}>
            <Grid item xs={3}>
              <div className={classes.root}>
                <GridList
                  cellHeight={500}
                  className={classes.gridList}
                  cols={1}
                >
                 </GridList>
              </div>
            </Grid>
            <Grid item xs={9}>
              <PoiView poi={poi} />
            </Grid>
            <Grid item xs={9}>
              <WeatherView weather={weather} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default PoiViewPage;