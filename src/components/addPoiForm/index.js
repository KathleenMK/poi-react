import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import { getCategories } from "../../api/poi-api";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    backgroundColor: "rgb(255, 255, 255)",
    variant: "outlined"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function AddPoiForm(props) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [descshort, setDescshort] = useState('');
  const [desc, setDesc] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [categorychosen, setCategory] = useState('');

  const [categories, setCategories] = useState([''])

  useEffect(() => {
    getCategories().then(categorieslist => {
    setCategories(categorieslist);
      });
     }, []);

  
 
  const handleSubmit = e => {
    e.preventDefault()
    console.log("in add poi form component")
    props.onUserSubmit(name, descshort, desc, latitude, longitude, categorychosen)
    console.log(name+desc+descshort+latitude+longitude+categorychosen)
  };
  
  // https://www.w3schools.com/react/react_forms.asp
  // https://material-ui.com/components/text-fields/
  // used this article's example as a basis for the login form:
  // https://levelup.gitconnected.com/create-a-signup-page-with-react-and-material-ui-9b203d18cf3f visited 18Aug21

return (
    <>
        <Card className={classes.root}>
            <CardContent>
        <form className={classes.root} onSubmit={handleSubmit}>
         <TextField
        label="Name"
        variant="filled"
        type="text"
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
       <TextField
        label="Short Description"
        variant="filled"
        type="text"
        required
        value={descshort}
        onChange={e => setDescshort(e.target.value)}
      />
       <TextField
        label="Description"
        variant="filled"
        type="text"
        required
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
       <TextField
        label="Latitude"
        variant="filled"
        type="number"
        required
        value={latitude}
        onChange={e => setLatitude(e.target.value)}
      />
       <TextField
        label="Longitude"
        variant="filled"
        type="number"
        required
        value={longitude}
        onChange={e => setLongitude(e.target.value)}
      />
        <br></br>
        <InputLabel className={classes.root} id="category-label">Select Category</InputLabel>
        <Select                               // https://material-ui.com/api/select/ visited 16Aug21
          defaultValue = ""
          labelId="category-label"
          id="category-select"
          variant="filled"
          required
          value={categorychosen}
          onChange={e => setCategory(e.target.value)}
        >
        {categories.map((category, index) => {
          return (
          <MenuItem key={index} value={category}>
            {category.name}
          </MenuItem>
          );
          })}
        </Select>
       <br></br>
      <div>
       <Button type="submit" variant="contained" color="primary">
          Add Poi
        </Button>
      </div>
    </form>
    </CardContent>
    </Card>
    </>
  );
}