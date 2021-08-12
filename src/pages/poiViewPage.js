import React, {useState, useEffect} from "react";
import PoiHeader from "../components/headerPoi/";
import PoiView from "../components/poiView/";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
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
  const classes = useStyles();
  const { id } = props.match.params;  //allows the component to extract the id from the browser's parameterized URL address.
  const [poi, setPoi] = useState(null);
  const [user, setUser] = useState({ username: null, password: null });
  //const [images, setImages] = useState([]);
  //const poi = props.poi;
  //const images = props.images;

  useEffect(() => {
    async function fetchData() {
    const email = "kate@gmail.com";
    const password = "KateKate1";
    const response = await axios.post(baseurl+'/api/users/authenticate', {email, password});
    axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
    console.log(response);
  //console.log(response.data.firstName);
  //const test = response.data.firstName;
  //const username = response.firstName;
    setUser({ username:response.data.firstName, password});
    const poiOne = await axios.get(baseurl+'/api/pois/'+id);
    console.log("just before poi");
    //console.log(poislist.data.length);
    console.log(poiOne.data);
    setPoi(poiOne.data.poi);  //also getting weather
    //console.log(pois);
    //setPois([poislist.data[1]]);
    //pois.push(poislist.data[2]);
    //console.log("just before pois");
    //console.log(poislist.data[0]);
  }
  fetchData();
    // eslint-disable-next-li
  }, []);
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
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default PoiViewPage;