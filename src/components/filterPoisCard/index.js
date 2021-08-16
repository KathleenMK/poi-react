import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import img from '../../images/tramore2.jpg';
import axios from "axios";

const baseurl = "https://lit-hamlet-10675.herokuapp.com";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "rgb(0, 250, 0)",
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterMoviesCard(props) {
  const classes = useStyles();
  const [categories, setCategories] = useState([{_id:'0', name:"All"}])

  /* const categories = [
    {id: 1, name: "Munster"},
    {id: 2, name: "Leinster"},
    {id: 3, name: "Other"}
  ]*/

  useEffect(() => {
    async function fetchData() {
      const email = "kate@gmail.com";
      const password = "KateKate1";
      const response = await axios.post(baseurl+'/api/users/authenticate', {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      console.log(response);
    //console.log(response.data.firstName);
    //const test = response.data.firstName;
    //const username = response.firstName;
      const categorieslist = await axios.get(baseurl + '/api/categories');
    //  console.log(categorieslist.data);
      setCategories([categories[0],...categorieslist.data]);
    //  console.log(categories);
    }
    fetchData();

  });

  const handleChange = (e, type, value) => {
    e.preventDefault()
    props.onUserInput(type, value)
    // Completed later
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value)
  }
  const handleCategoryChange = e => {
    handleChange(e, "category", e.target.value)
  };

// using index as key, not recommended https://reactjs.org/docs/lists-and-keys.html#keys visitied 12Aug21

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter by category
        </Typography>
        <TextField
           className={classes.formControl}
           id="filled-search"
           label="Search field"
           type="search"
           value={props.titleFilter}
           variant="filled"
           onChange={handleTextChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={props.categoryFilter}
            onChange={handleCategoryChange}
          >
            {categories.map((category, index) => {
              return (
                <MenuItem key={index} value={category._id}>
                  {category.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
     {/* <CardMedia
        className={classes.media}
        image={img}
        title="Filter"
      />
     
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter by category
          <br />
        </Typography>
      </CardContent>
      */}
    </Card>
    
  );
}