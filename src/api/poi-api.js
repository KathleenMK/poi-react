
import axios from "axios";
axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.poi;  // login JWT used in following axios calls

const baseurl = "https://lit-hamlet-10675.herokuapp.com";

export const getPois = async () => {
  const response = await axios.get(baseurl + "/api/pois")
  //console.log(response);
  const poilist = await response.data;
  //console.log(poilist);
return poilist;
};

export const getCategories = async () => {
  const response = await axios.get(baseurl + "/api/categories")
  //console.log(response);
  const categorieslist = await response.data;
return categorieslist;
};

export const getOnePoi = async (id) => {
  const response = await axios.get(baseurl + "/api/pois/"+id)
  //console.log(response);
  const poione = await response.data;
  //console.log(poione);
return poione;
};

export const login = async (email, password) => {
  //console.log(email,password);
  const response = await axios.post(baseurl+'/api/users/authenticate', {email, password});
  //console.log(response);
  axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token; 
  localStorage.poi = response.data.token; // JWT added to local storage, to be used elsewhere, method as per Svelte app
return response;
};

export const deleteOnePoi = async (id) => {
  const response = await axios.delete(baseurl + "/api/pois/"+id)
  //console.log(response);
  //console.log(poione);
return response;
};

export const addPoi = async (name, descshort, description, latitude, longitude, category) => {
  //console.log(email,password);
  const poi = {
    name: name,
    descshort: descshort,
    description: description,
    latitude: latitude,
    longitude: longitude,
    category: category,
};
  const response = await axios.post(baseurl+'/api/categories/'+category._id+'/pois', poi);
  console.log(response);
  return response;
};