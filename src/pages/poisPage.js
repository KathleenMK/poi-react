import React, { useState, useEffect } from "react";
import Header from "../components/headerPoiList";
import FilterCard from "../components/filterPoisCard";
import Grid from "@material-ui/core/Grid";
import PoiList from "../components/poiList";
import axios from "axios";

const baseurl = "https://lit-hamlet-10675.herokuapp.com";

const PoiListPage = (props) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.poi;  // login JWT used in following axios calls
  const [pois, setPois] = useState( [] );
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("0");
 
  const categoryId = categoryFilter;
  
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
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header title={"What we have so far..."} />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <FilterCard
            onUserInput={handleChange}
            nameFilter={nameFilter}
            categoryFilter={categoryFilter}
          />
        </Grid>
        <Grid item xs={10}>
          <PoiList pois={displayedPois} />
        </Grid>
      </Grid>







   
    </>
  );
};
export default PoiListPage;