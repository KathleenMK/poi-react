import React from "react";
import Header from "../components/headerPoiList";
import FilterCard from "../components/filterPoisCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PoiList from "../components/poiList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const PoiListPage = (props) => {
  const classes = useStyles();
  const pois = props.pois;

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