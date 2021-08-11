import React from "react";
import Poi from "../poiCard/";
import Grid from "@material-ui/core/Grid";
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';


  

const PoiList = (props) => {

    const rows = [
        { id: 1, col1: 'Name', col2: 'World' },
        { id: 2, col1: 'XGrid', col2: 'is Awesome' },
        { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
      ];
      
      const columns = [
        { field: 'col1', headerName: 'NAME', width: 150 },
        { field: 'col2', headerName: 'INTRO', width: 150 },
      ];

     let poiCards = props.pois.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Poi key={m.id} poi={m} />
    </Grid>
  ));
  return poiCards;
  /*
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
  */
};

export default PoiList;

