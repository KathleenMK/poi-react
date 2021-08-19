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

const HomePage = (props) => {
    const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Home Page..."} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
        
    </Grid>
    </Grid>
    </Grid>
  );
};
export default HomePage;