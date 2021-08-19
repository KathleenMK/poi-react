
import axios from "axios";

const baseurl = "https://lit-hamlet-10675.herokuapp.com";


export const getPois = () => {

    //try{
        async function fetchData() {
            //const email = "kate@gmail.com"; //needs to be replaced with user input values
            //const password = "KateKate1"; //needs to be replaced with user input values
            //const response = await axios.post(baseurl+'/api/users/authenticate', {email, password});
            //axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token; 
            //localStorage.poi = response.data.token; // JWT added to local storage, to be used elsewhere, method as per Svelte app
            //console.log(response);
              // not using User currently however may in future
            //setUser({ username:response.data.firstName, password});
            console.log("in poi-api")
            const poislist = await axios.get(baseurl+'/api/pois');
            console.log(poislist.data);
            const poisapi = poislist.data;
            //setPois(poislist.data);
            //const categories = await axios.get(baseurl + '/api/categories');
            //console.log(categories.data);
            return poisapi;
            }
          fetchData();

    };