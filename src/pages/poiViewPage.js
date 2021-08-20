import React, {useState, useEffect} from "react";
import PoiHeader from "../components/headerPoi/";
import PoiView from "../components/poiView/";
import WeatherView from "../components/weatherView/";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const baseurl = "https://lit-hamlet-10675.herokuapp.com";

const PoiViewPage = (props) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.poi;  // login JWT used in following axios calls
  const { id } = props.match.params;  //allows the component to extract the id from the browser's parameterized URL address.
  const [poi, setPoi] = useState(null);
  const [weather, setWeather] = useState( [] );
   
 useEffect(() => {
    async function fetchData() {
    const poiOne = await axios.get(baseurl+'/api/pois/'+id);
    console.log(poiOne.data);
    console.log(poiOne.data.poi);
    console.log(poiOne.data.weather);
    setPoi(poiOne.data.poi);
    setWeather(poiOne.data.weather);  
     }
  fetchData();
    // eslint-disable-next-li
  }, []); //empty dependency array ensures rendering onMount only

  //Grid detail taken from: https://material-ui.com/components/grid/
  
  return (
    <>
      {poi ? (
        <>
        <Grid container spacing={1}>
            <Grid item xs={12}>
              <PoiHeader poi={poi} />
            </Grid>
        </Grid>
        <Grid container spacing={1}>
            <Grid item xs={9}>
              <PoiView poi={poi} />
            </Grid>
            <Grid item xs={3}>
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