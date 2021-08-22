import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import AssessmentIcon from '@material-ui/icons/Assessment'; //https://material-ui.com/components/material-icons/#material-icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import PublicIcon from '@material-ui/icons/Public';
import Tooltip from '@material-ui/core/Tooltip';  //https://material-ui.com/components/tooltips/
import { makeStyles } from "@material-ui/core/styles";
import ControlPointSharpIcon from '@material-ui/icons/ControlPointSharp';

const useStyles = makeStyles((theme) => ({
  root: {
        padding: "10px",
      },
  img: {
    maxHeight: 400,
  }
 }));

const BaseAuthHeader = (props) => {
  const classes = useStyles();
  const context = useContext(AuthContext);
  console.log(context.isAuthenticated)
  //console.log(context.user)
  //console.log(context.user.username)
  const { history } = props;

  /* <button onClick={() => 
        history.push("/pois")
        }>Report</button>*/

  return context.isAuthenticated ? (
    <>
      
      
      <Grid container className={classes.root} spacing={1} justifyContent="space-between">
      <Grid item xs={1}>
      <Tooltip title="Home" placement="bottom">
        <PublicIcon color="primary" fontSize="large" onClick={() => 
        history.push("/home")
        }/>
        </Tooltip>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h5"><em>Keep Calm and go to the Beach...</em></Typography>
          <Typography variant="h6">Welcome back {context.user.name}...</Typography>
        </Grid>
        <Grid item xs={2}>
        <Tooltip title="Beaches" placement="bottom">
        <AssessmentIcon color="primary" fontSize="large" onClick={() => 
        history.push("/pois")
        }/>
        </Tooltip>

        <Tooltip title="Add POI" placement="bottom">
        <ControlPointSharpIcon color="primary" fontSize="large" onClick={() => 
        history.push("/addpoi")
        }/>
        </Tooltip>
      <Tooltip title="Signout" placement="bottom">
      <ExitToAppIcon color="primary" fontSize="large" onClick={() => 
        context.signout()
        }/>
        </Tooltip>
        
        </Grid>
        </Grid>
    </>
  ) : (
    <>

<Grid container className={classes.root} spacing={1} justifyContent="space-between">
<Grid item xs={1}>
<Tooltip title="Home" placement="bottom">
        <PublicIcon color="primary" fontSize="large" onClick={() => 
        history.push("/home")
        }/>
        </Tooltip>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h5"><em>Keep Calm and go to the Beach...</em></Typography>
          <Typography variant="h6">Login...</Typography>
        </Grid>
        <Grid item xs={2}>
        <Tooltip title="Login" placement="bottom">
        <AccountCircleSharpIcon color="primary" fontSize="large" onClick={() => 
        history.push("/login")
        }/>
        </Tooltip>
      
        </Grid>
        </Grid>


      
    </>
  );
};

export default withRouter(BaseAuthHeader);
