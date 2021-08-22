import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import PoiViewPage from './pages/poiViewPage'
import LoginPage from './pages/loginPage'
import PrivateRoute from "./privateRoute";
import AuthHeader from "./components/authHeader";
import AuthProvider from "./contexts/authContext";
import PoiListPage from "./pages/poisPage";
import HomePage from "./pages/homePage";


const App = () => {
  return (
    <BrowserRouter>
     <AuthProvider>
        <AuthHeader />
      <Switch>
      <PrivateRoute exact path="/pois" component={PoiListPage} />
       <PrivateRoute exact path="/pois/:id" component={PoiViewPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/" component={HomePage} />
         <Redirect from="*" to="/" />
      </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));