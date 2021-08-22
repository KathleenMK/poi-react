import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { deleteOnePoi } from "../../api/poi-api";
import Tooltip from '@material-ui/core/Tooltip';  //https://material-ui.com/components/tooltips/
import { Redirect } from "react-router-dom";

//table design from Basic Table at  https://material-ui.com/components/tables/ visited 16Aug21
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  img: {
    maxWidth: 100,
  }
});
 
const PoiList = (props) => {
  const classes = useStyles();
  const rows = props.pois;
  const { history } = props;

  const deletePoi = async (id) => {
    const deletePoi = await deleteOnePoi(id);
    console.log(deletePoi);
    // does not refresh the Pois page
   };

  // using index as key, not recommended https://reactjs.org/docs/lists-and-keys.html#keys visited 12Aug21
    // let poiCards = props.poismap((m, index) => (
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="left">INTRO</TableCell>
            <TableCell align="right">IMAGE</TableCell>
            <TableCell align="right">ADDED BY</TableCell>
            <TableCell align="right">TBC</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              <Link to={`/pois/${row._id}`}>{row.name}</Link>
            </TableCell>
            <TableCell align="left">{row.descshort}</TableCell>
            <TableCell align="right"><img className={classes.img} alt="complex" src={row.imageurl}/></TableCell>
            <TableCell align="right">{row.contributor.firstName}</TableCell>
            <TableCell align="right"><Tooltip title="Delete from database" placement="bottom">
                                      <Link to={`/pois`}>
                                      <DeleteForeverRoundedIcon color="error" fontSize="large" onClick={() => 
                                       deletePoi(row._id)}/></Link>
        </Tooltip></TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
 };

export default PoiList;

