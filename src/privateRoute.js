import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";
import PoisPage from "./pages/poisPage";


const PrivateRoute = (props) => {
  const context = useContext(AuthContext);
   //Destructure props from <privateRoute>
  const { component: Component, ...rest } = props;
   //console.log(props.location)
   //console.log(rest)
  return context.isAuthenticated ? (
    //<Route path="/" component={PoisPage} />
    <Route {...rest} render={(props) => <Component {...props} />} />

  ) : (
    <Redirect
      to={{
        pathname: "/",
        //state: { from: props.location },
      }}
    />
  );
};

export default PrivateRoute;
