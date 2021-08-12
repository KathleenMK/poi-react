import React, { useState, useEffect } from "react";
import Header from "../components/headerPoiList";
import FilterCard from "../components/filterPoisCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PoiList from "../components/poiList";
import axios from "axios";

const baseurl = "https://lit-hamlet-10675.herokuapp.com";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const PoiListPage = (props) => {
  const classes = useStyles();
  const [pois, setPois] = useState( [] );
  const [user, setUser] = useState({ username: null, password: null });
  //const pois = props.pois;

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
  const poislist = await axios.get(baseurl+'/api/pois');
  console.log("just before poislist");
  console.log(poislist.data.length);
  console.log(poislist.data);
  setPois(poislist.data);
  console.log(pois);
  //setPois([poislist.data[1]]);
  //pois.push(poislist.data[2]);
  console.log("just before pois");
  console.log(poislist.data[0]);
}
fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"What we have so far..."} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard />
        </Grid>
        <PoiList pois={pois}></PoiList>
      </Grid>
    </Grid>
  );
};
export default PoiListPage;