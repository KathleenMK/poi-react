import React, {useState, useEffect} from "react";
import PoiHeader from "../components/headerPoi/";
import PoiView from "../components/poiView/";
import WeatherView from "../components/weatherView/";
import Grid from "@material-ui/core/Grid";
import { getOnePoi } from "../api/poi-api.js";

const PoiViewPage = (props) => {
  const { id } = props.match.params;  //allows the component to extract the id from the browser's parameterized URL address.
  const [poi, setPoi] = useState(null);
  const [weather, setWeather] = useState( [] );
   
 useEffect(() => {
  async function fetchData() {
    const poione = await getOnePoi(id);
    console.log(poione);
    setPoi(poione.poi);
    setWeather(poione.weather);  
 }
  fetchData();
    // eslint-disable-next-li
  }, [id]); //empty dependency array ensures rendering onMount only

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