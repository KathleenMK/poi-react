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
import { getCategories } from "../../api/poi-api";

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

export default function FilterMoviesCard(props) {
  const classes = useStyles();
  const [categories, setCategories] = useState([{_id:'0', name:"All"}])

  useEffect(() => {
    getCategories().then(categorieslist => {
    setCategories([categories[0],...categorieslist]);
      });
    /*
    async function fetchData() {
    const categorieslist = await axios.get(baseurl + '/api/categories');
    setCategories([categories[0],...categorieslist.data]);
     }
    fetchData();
    */
  });

  const handleChange = (e, type, value) => {
    e.preventDefault()
    props.onUserInput(type, value)
  };
  
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value)
  }
  
  const handleCategoryChange = e => {
    handleChange(e, "category", e.target.value)
  };

return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="subtitle1">
          <SearchIcon fontSize="small" />
          Search by name:
        </Typography>
        <TextField
           className={classes.formControl}
           id="filled-search"
           label="Search field"
           type="search"
           value={props.nameFilter}
           variant="filled"
           onChange={handleTextChange}
        />
        <Typography variant="subtitle1">
          or Filter by category:
        </Typography>
        <FormControl className={classes.formControl}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select                               // https://material-ui.com/api/select/ visited 16Aug21
          defaultValue = {categories[0]._id}  //to handle the warning: SelectInput.js:342 Material-UI: You have provided an out-of-range value `undefined` for the select component.
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
    </Card>
  );
}