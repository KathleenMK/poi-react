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

..... [For non-Movies Fan app] Insert a diagram of the API's data model (see example below) AND/OR a sample(s) of the JSON documents returned by its endpoints ........

![][model]

......[For the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ GET /blogs - displays all published blogs.
+ POST /blogs (protected) - add a new blog.
+ GET /blogs/:id - displays a particular blog.
+ GET /blogs/:id/comments (protected) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## Independent learning (If relevant).

....... Briefly state any technologies/techniques used in your project codebase that was not covered in the lectures/labs. Provide source code filename (source code excerpts are not required in most cases) references to support your assertions and include references (articles/blogs) ......... 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png


https://fathomtech.io/blog/create-a-react-component-library-using-create-react-app/