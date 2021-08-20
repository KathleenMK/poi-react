import React from "react";
import Header from "../components/headerPoiList";
import Grid from "@material-ui/core/Grid";

const HomePage = (props) => {
  
  return (
    <Grid container>
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