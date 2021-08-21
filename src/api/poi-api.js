
import axios from "axios";

const baseurl = "https://lit-hamlet-10675.herokuapp.com";

export const getPois = async () => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.poi;  // login JWT used in following axios calls
  const response = await axios.get(baseurl + "/api/pois")
const poilist = await response.data;
console.log(poilist);
return poilist;
};

export const getCategories = async () => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.poi;  // login JWT used in following axios calls
  const response = await axios.get(baseurl + "/api/categories")
const categorieslist = await response.data;
return categorieslist;
};

export const getOnePoi = async (id) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.poi;  // login JWT used in following axios calls
  const response = await axios.get(baseurl + "/api/pois/"+id)
const poione = await response.data;
console.log(poione);
return poione;
};

export const login = async (email, password) => {
  console.log(email,password);
  const response = await axios.post(baseurl+'/api/users/authenticate', {email, password});
  console.log(response);
  axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token; 
  localStorage.poi = response.data.token; // JWT added to local storage, to be used elsewhere, method as per Svelte app
console.log(response);
};
