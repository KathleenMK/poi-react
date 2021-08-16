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
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("0");
 
  //console.log(categoryFilter);
  const categoryId = categoryFilter;
  //console.log(categoryId);

  let displayedPois = pois
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return categoryId !== 0 ? m.category._id.includes(categoryId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setCategoryFilter(value);
  };

useEffect(() => {
  async function fetchData() {
  const email = "kate@gmail.com"; //needs to be replaced with user input values
  const password = "KateKate1"; //needs to be replaced with user input values
  const response = await axios.post(baseurl+'/api/users/authenticate', {email, password});
  axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token; 
  localStorage.poi = response.data.token; // JWT added to local storage, to be used elsewhere, method as per Svelte app
  console.log(response);
    // not using User currently however may in future
  setUser({ username:response.data.firstName, password});
  const poislist = await axios.get(baseurl+'/api/pois');
  console.log(poislist.data);
  setPois(poislist.data);
  const categories = await axios.get(baseurl + '/api/categories');
  console.log(categories.data);
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
        <FilterCard
      onUserInput={handleChange}
      titleFilter={nameFilter}
      genreFilter={categoryFilter}
    />
        </Grid>
        <PoiList pois={displayedPois}></PoiList>
      </Grid>
    </Grid>
  );
};
export default PoiListPage;