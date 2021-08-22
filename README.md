# Assignment - ReactJS app.

Name: Kathleen McCarthy Kelleher

## Overview.

## A React Application that manages Points of Interest, specifically beaches

### based on the API service deployed at:
### https://lit-hamlet-10675.herokuapp.com
### Git repo here: https://github.com/KathleenMK/poi-web-app

## Features of the app are:

-  Login as a user to access further details
-  View list of points retrieved by the api call
-  Filter by categories and name
-  Detailed view of each point, including the current weather, based on the latitude and longitude, using an OpenWeather API implemented within the API service
-  Logout

This React app has been created using Create React App.

## Setup requirements to run locally

- git clone the repository
- run npm install
- run npm start

## API Data Model.

Using the API deployed at: https://lit-hamlet-10675.herokuapp.com

login:
const response = await axios.post(baseurl+'/api/users/authenticate', {email, password});

firstName: "Kate"
id: "6120f34205526100155bfa9d"
lastName: "Power"
password: "$2a$10$D6uRhaU70PJ7Ql6SZQU33e.kdiBDsEg4Aa7Vs9.T1qjQru0M.lTDi"
success: true
token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjBmMzQyMDU1MjYxMDAxNTViZmE5ZCIsImVtYWlsIjoia2F0ZUBnbWFpbC5jb20iLCJpYXQiOjE2Mjk1NTcwNTMsImV4cCI6MTYyOTU2MDY1M30.A1aOK0tn5d2Oey6iYIfA7pZtzNh4lq4D_-dPSYEd2v8"

get POIs list

const response = await axios.get(baseurl + "/api/pois")
data: Array(13)
0: {_id: "6120f34305526100155bfaa6", name: "Tramore Beach", descshort: "Tramore is a seaside town located in the South East, only 13 kilometres south of Waterford city.", description: "Tramore is a seaside town located in the South Eas…eguard times are posted on the beach noticeboard.", imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615928635/fy27zgydlsizhiacopkz.jpg", …}
1: {_id: "6120f34305526100155bfaa7", name: "Tragumna Beach", descshort: "This is a small scenic beach located in a rural ar…rom Skibbereen with marsh and lake in background.", description: "This is a small scenic beach located in a rural ar…es are displayed on the beach information board).", imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615928689/ecosekrebc28zfxgqvqy.jpg", …}
2: {_id: "6120f34305526100155bfaa8", name: "Portnoo /Narin", descshort: "An extensive sandy beach in a rural environment.", description: "An extensive sandy beach in a rural environment. T…yed on the information noticeboard at the beach).", imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615928743/ak4jnloy7jlpt82bsx7i.jpg", …}
3: {_id: "6120f34305526100155bfaa9", name: "Morriscastle", descshort: "Morriscastle beach is located on the East Coast of…xford about 6.4 kilometres south of Cahore Point.", description: "Morriscastle beach is located on the East Coast of…yed on the information noticeboard at the beach).", imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615928785/jjuejhp7w34qpwhlpjof.jpg", …}
4: {_id: "6120f34405526100155bfaaa", name: "Greystones", descshort: "Greystones beach is a mix of pebble and sand andis…ted at the southern end of thetown of Greystones.", description: "Greystones beach is a mix of pebble and sand andis…ted on the information noticeboard on the beach).", imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615928820/vzrzae72mfjhlqwf8xpn.jpg", …}
5: {_id: "6120f34405526100155bfaab", name: "Curracloe", descshort: "This beach is part of a continuous stretch of wide…from Raven Point to Ballyconigar near Blackwater.", description: "This beach is part of a continuous stretch of wide…yed on the information noticeboard at the beach).", imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615928858/o53pmsb7qb1vsub62ueo.jpg", …}
6: {_id: "6120f34405526100155bfaac", name: "Inchydoney", descshort: "Inchydoney is a sandy Beach located on Inchydoney …nd a few kilometres from the town of Clonakility.", description: "Inchydoney is a sandy Beach located on Inchydoney …the hotel which is located adjacent to the beach.", imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615928894/e0siangfwfipsxwabo4h.jpg", …}
7: {_id: "6120f34405526100155bfaad", name: "Ballinskelligs", descshort: "Ballinskelligs or Baile na Sceilge is one of the few remaining Irish speaking areas in Kerry.", description: "Ballinskelligs or Baile na Sceilge is one of the f…yed on the information noticeboard at the beach).", imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615928940/xq95efbeyufxe15exkyg.jpg", …}
8: {_id: "6120f34405526100155bfaae", name: "Ventry", descshort: "Ventry or Ceann Trá in Irish is a sandy beach loca…n a Natural heritage area rich in flora and fauna", description: "Ventry or Ceann Trá in Irish is a sandy beach loca…ted on the information noticeboard at the beach).", imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615928980/pvozh0ky3bihyrr7hrzf.jpg", …}
9: {_id: "6120f34405526100155bfaaf", name: "Spanish Point", descshort: "The bathing water at Spanish Point is located on the coast of Clare.", description: "The bathing water at Spanish Point is located on t…2, continue straight on the R482 for approx 500m.", imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615929018/kc6mutnzultucqde4pnf.jpg", …}
10: {_id: "6120f34405526100155bfab0", name: "An Trá Mhór (Inverin)", descshort: "An Trá Mhóris a sandy beach in a rural, Irish speaking area. Take the R336 from Galway city", description: "An Trá Mhóris a sandy beach in a rural, Irish spea…yed on the information noticeboard at the beach).", imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615929057/j3akwinfojmyhkl4catt.jpg", …}
11: {_id: "6120f34405526100155bfab1", name: "Clare Island", descshort: "This is a sandy, rural beach located on an island off the coast of Mayo in the west of Ireland.", description: "This is a sandy, rural beach located on an island …g season but lifebuoys are provided on the beach.", imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615929099/qzozpbj35ohx8pxntzcv.jpg", …}
12: {_id: "6120f34405526100155bfab2", name: "Shellinghill/Templetown", descshort: "Shellinghill/Templetown, called after the crusadin…one of Louth's most popular stretch of coastline.", description: "Shellinghill/Templetown, called after the crusadin…ke the exit for Carlingford and Greenore (R173). ", imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615929140/rr2eldolpdnaanfueqvd.jpg", …}
length: 13
[[Prototype]]: Array(0)

category:
description: "Munster"
name: "Munster"
__v: 0
_id: "6120f34305526100155bfaa2"
[[Prototype]]: Object
contributor:
email: "kate@gmail.com"
firstName: "Kate"
lastName: "Power"
password: "$2a$10$D6uRhaU70PJ7Ql6SZQU33e.kdiBDsEg4Aa7Vs9.T1qjQru0M.lTDi"
__v: 0
_id: "6120f34205526100155bfa9d"
[[Prototype]]: Object
description: "Tramore is a seaside town located in the South East, only 13 kilometres south of Waterford city. Tramore is one of the more popular resorts in Ireland. The town is situated on the north-western corner of Tramore Bay on a hill that slopes down to the strand, or sand spit, that divides the bay. Behind the spit lies the tidal lagoon known as the Back Strand.It is a popular resort for tourists in the summer and has 5 kilometres of beach and sand dunes looking out onto the Atlantic Ocean. Most recently Tramore has gained an excellent reputation for surfing and many surfers flock to this destination. Lifeguard times are posted on the beach noticeboard."
descshort: "Tramore is a seaside town located in the South East, only 13 kilometres south of Waterford city."
imagepublicid: "fy27zgydlsizhiacopkz"
imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615928635/fy27zgydlsizhiacopkz.jpg"
latitude: 52.15736076779771
longitude: -7.13500077023923
name: "Tramore Beach"
__v: 0
_id: "6120f34305526100155bfaa6"
[[Prototype]]: Object



  

get categories list

  const response = await axios.get(baseurl + "/api/categories")

  data: Array(4)
0: {_id: "6120f34305526100155bfaa2", name: "Munster", description: "Munster", __v: 0}
1: {_id: "6120f34305526100155bfaa3", name: "Leinster", description: "Leinster", __v: 0}
2: {_id: "6120f34305526100155bfaa4", name: "Connaught", description: "Connaught", __v: 0}
3: {_id: "6120f34305526100155bfaa5", name: "Ulster", description: "Ulster", __v: 0}
length: 4
[[Prototype]]: Array(0)

get one poi


 
  const response = await axios.get(baseurl + "/api/pois/"+id)




poi:
category:
description: "Leinster"
name: "Leinster"
__v: 0
_id: "6120f34305526100155bfaa3"
[[Prototype]]: Object
contributor:
email: "mike@gmail.com"
firstName: "Mike"
lastName: "Power"
password: "$2a$10$86o8pUYfobf5V7hnHbjNLOAhsAwskKYSuTqmDJ1xEsFa28f8o3Rp."
__v: 0
_id: "6120f34205526100155bfa9e"
[[Prototype]]: Object
description: "Morriscastle beach is located on the East Coast of County Wexford about 6.4 kilometres south of Cahore Point. The beach is a fine sandy beach stretchingapproximately3.2 kilometres in length. It is claimed to be the longest beach in Ireland and is known locally as the ?Golden Mile?. The area is important from a nature point of view with a Special Area of Conservation ? Kilmuckridge / Tinnaberna Sandhills to the South. The Wexford Coastal Pathway passes through Morriscastle on its 221km journey. The beach can be reached by a 150 metre walk from the car park onto the strand. The beach is a very popular for bathing with locals and visitors. The beach is lifeguard patrolled during the bathing season (lifeguard times are displayed on the information noticeboard at the beach)."
descshort: "Morriscastle beach is located on the East Coast of County Wexford about 6.4 kilometres south of Cahore Point."
imagepublicid: "jjuejhp7w34qpwhlpjof"
imageurl: "https://res.cloudinary.com/dzkcnbv7p/image/upload/v1615928785/jjuejhp7w34qpwhlpjof.jpg"
latitude: 52.50902192090245
longitude: -6.241205194042975
name: "Morriscastle"
__v: 0
_id: "6120f34305526100155bfaa9"
[[Prototype]]: Object
weather:
clouds: "broken clouds"
feelsLike: 19
humidity: 85
temperature: 19
visibility: 10
windDirection: 199
windSpeed: 5.2
[[Prototype]]: Object
[[Prototype]]: Object




..... [For non-Movies Fan app] Insert a diagram of the API's data model (see example below) AND/OR a sample(s) of the JSON documents returned by its endpoints ........

![][model]

......[For the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........

## App Design.

### Component catalogue.

<img src="https://github.com/KathleenMK/poi-react/blob/main/readme_images/storybook.png" alt="storybook" width="1000"/>

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

![][stories]

### UI Design.

Home page, clicking login icon on top right navigates to the login page: <br>
<img src="https://github.com/KathleenMK/poi-react/blob/main/readme_images/homepage.png" alt="homepage" width="1000"/>

Login page, with login form, upon submit, if authentication is successful navigates to the pois page, clicking top left icon navigates to the home page: <br>
<img src="https://github.com/KathleenMK/poi-react/blob/main/readme_images/loginpage.png" alt="loginpage" width="1000"/>

POIs/Beaches page, lists summary details for beaches in the data base, search box and dropdown input filters those shown, clicking the top right icon signs out of the app: <br>
<img src="https://github.com/KathleenMK/poi-react/blob/main/readme_images/poispage.png" alt="poispage" width="10000"/>

POI/Beach details page, shows full detail of the beach plus currect weather, clicking the assessment icon in the top right brings back to the list page: <br>
<img src="https://github.com/KathleenMK/poi-react/blob/main/readme_images/poipage.png" alt="poipage" width="1000"/>

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

<Route path="/" component={HomePage} />
<Route exact path="/login" component={LoginPage} />
<PrivateRoute exact path="/pois" component={PoiListPage} />
<PrivateRoute exact path="/pois/:id" component={PoiViewPage} />
      


+ GET /blogs - displays all published blogs.
+ POST /blogs (protected) - add a new blog.
+ GET /blogs/:id - displays a particular blog.
+ GET /blogs/:id/comments (protected) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## Independent learning (If relevant).

- Installed storybook using "npx -p @storybook/cli sb init", based on the article: https://fathomtech.io/blog/create-a-react-component-library-using-create-react-app/

- created form to handle user input based on the article: https://levelup.gitconnected.com/create-a-signup-page-with-react-and-material-ui-9b203d18cf3f

- Installed axios using "npm install axios" as per: https://www.freecodecamp.org/news/how-to-use-axios-with-react/
  Made use of axios for api calls and JWT management based on the methods used in creation of the POI Svelte app as per the project: https://github.com/KathleenMK/poi-svelte, specifically: https://github.com/KathleenMK/poi-svelte/blob/master/src/services/poi-service.js

- Updates to the UI based on the components information here: https://material-ui.com/, including Grid, Icon, Tooltip, Paper, Typography, Card Media, Card

