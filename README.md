# Assignment - ReactJS app.

## Name: Kathleen McCarthy Kelleher

## Overview.

A React Application that manages Points of Interest, specifically beaches, based on the: <br>
API service deployed at: https://lit-hamlet-10675.herokuapp.com <br>
API service Git repo at: https://github.com/KathleenMK/poi-web-app <br>

## Features of the React app are:

-  Login as a user (sample user email and password: kate@gmail.com, KateKate1; mike@gmail.com, MikeMike1)
-  View summary list of points retrieved by the api call
-  Filter by categories and name
-  Detailed view of each point, including the current weather, based on the latitude and longitude, using an OpenWeather API implemented within the API service
-  Delete POI from the database
-  Add POI to the database
-  Logout

This React app has been created using Create React App.

## Setup requirements to run locally

- git clone the repository
- run npm install
- run npm start

## API Data Model.

### List of POIs:<br>
(api call: axios.get("https://lit-hamlet-10675.herokuapp.com/api/pois"))<br>
includes name, description, short description, latitude, longitude, image url and publicid as per the cloudinary service, category as an object and contributor as an object...<br>
<img src="https://github.com/KathleenMK/poi-react/blob/main/readme_images/data_poislist.png" alt="poislist" width="1000"/>

### List of Categories:<br>
(api call: axios.get("https://lit-hamlet-10675.herokuapp.com/api/categories"))<br>
includes name and description...<br>
<img src="https://github.com/KathleenMK/poi-react/blob/main/readme_images/data_categories.png" alt="categorieslist" width="1000"/>

### Get One POI:<br>
(api call: axios.get("https://lit-hamlet-10675.herokuapp.com/api/pois/"+id))<br>
includes poi data as above plus current weather data...<br>
<img src="https://github.com/KathleenMK/poi-react/blob/main/readme_images/data_poione.png" alt="poione" width="1000"/>


## App Design.

### Component catalogue.

Components as per Storybook: <br>

<img src="https://github.com/KathleenMK/poi-react/blob/main/readme_images/storybook.png" alt="storybook" width="1000"/>

### UI Design.

Home page, clicking login icon on top right navigates to the login page: <br>
<img src="https://github.com/KathleenMK/poi-react/blob/main/readme_images/homepage.png" alt="homepage" width="1000"/>

Login page, with login form, upon submit, if authentication is successful navigates to the pois page, clicking top left icon navigates to the home page: <br>
<img src="https://github.com/KathleenMK/poi-react/blob/main/readme_images/loginpage.png" alt="loginpage" width="1000"/>

POIs/Beaches page, lists summary details for beaches in the data base, search box and dropdown input filters those displayed, <br>
Clicking the top left icon returns to the home page, assessment icon returns this page, plus icon brings up the add POI page and clicking the top right icon signs out of the app: <br>
<img src="https://github.com/KathleenMK/poi-react/blob/main/readme_images/poispage.png" alt="poispage" width="10000"/>

POI/Beach details page, shows full detail of the beach plus currect weather, clicking the assessment icon in the top right brings back to the list page: <br>
<img src="https://github.com/KathleenMK/poi-react/blob/main/readme_images/poipage.png" alt="poipage" width="1000"/>

Add new POI/Beach details page: <br>
<img src="https://github.com/KathleenMK/poi-react/blob/main/readme_images/addpoipage.png" alt="addpoipage" width="1000"/>
   

### Routing.

baseurl = "https://lit-hamlet-10675.herokuapp.com";

+ POST (baseurl+'/api/users/authenticate', {email, password}) - authenticates the user, retrieves the JWT details and returns the POI list view

+ GET (baseurl + "/api/pois") (protected) - returns summary list of all POIs in the data base

+ GET (baseurl + "/api/categories") (protected) - returns list of categories, used in the POI list for filtering and the add POI form for selection
 
+ GET (baseurl + "/api/pois/"+id) (protected) - returns specific POI detail on the POI View page and it's current weather

+ DELETE (baseurl + "/api/pois/"+id) (protected) - deletes specific POI from the database

+ POST (baseurl+'/api/categories/'+category._id+'/pois', poi) (protected) - saves new POI details to the database
  

## Independent learning.

- Installed storybook using "npx -p @storybook/cli sb init", based on the article: https://fathomtech.io/blog/create-a-react-component-library-using-create-react-app/

- created form to handle user input based on the article: https://levelup.gitconnected.com/create-a-signup-page-with-react-and-material-ui-9b203d18cf3f

- Installed axios using "npm install axios" as per: https://www.freecodecamp.org/news/how-to-use-axios-with-react/
  Made use of axios for api calls and JWT management based on the methods used in creation of the POI Svelte app as per the project: https://github.com/KathleenMK/poi-svelte, specifically: https://github.com/KathleenMK/poi-svelte/blob/master/src/services/poi-service.js

- Updates to the UI based on the components information here: https://material-ui.com/, including Grid, Icon, Tooltip, Paper, Typography, Card Media, Card, Select, Tables

