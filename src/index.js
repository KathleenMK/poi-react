/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import PoisPage from "./pages/poisPage";
import PoiViewPage from './pages/poiViewPage'
import LoginPage from './pages/loginPage'
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import AuthProvider from "./contexts/authContext";
import { Link } from "react-router-dom";
import PoiListPage from "./pages/poisPage";


const App = () => {
  return (
    <BrowserRouter>
     <AuthProvider>
        <AuthHeader />
      <Switch>
      <PrivateRoute exact path="/pois" component={PoiListPage} />
       <PrivateRoute exact path="/pois/:id" component={PoiViewPage} />
       <Route exact path="/" component={LoginPage} />
       <Route path="/login" component={LoginPage} />
        <Redirect from="*" to="/" />
      </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));