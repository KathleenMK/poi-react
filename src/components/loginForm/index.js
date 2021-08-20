import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import Button from '@material-ui/core/Button';

const baseurl = "https://lit-hamlet-10675.herokuapp.com";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "rgb(255, 255, 255)",
    variant: "outlined"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function LoginForm(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = e => {
    e.preventDefault()
    console.log("in component")
    props.onUserSubmit(email, password)
  };
  
  // https://www.w3schools.com/react/react_forms.asp
  // https://material-ui.com/components/text-fields/
  // used this article's example as a basis for the login form:
  // https://levelup.gitconnected.com/create-a-signup-page-with-react-and-material-ui-9b203d18cf3f visited 18Aug21

return (
    <>
        <Card className={classes.root}>
            <CardContent>
            <h2>Login page</h2>
            <p>You must log in to view the protected pages </p>
     
      <form className={classes.root} onSubmit={handleSubmit}>
         <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
       <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </div>
    </form>
    </CardContent>
    </Card>
    </>
  );
}