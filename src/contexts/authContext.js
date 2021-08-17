import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const baseurl = "https://lit-hamlet-10675.herokuapp.com";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ email: null, password: null });

  // useEffect(() => {
  //   setIsAuthenticated(true);
  // }, [newUser.username]);

  const authenticate = async (email, password) => {
      console.log("in authenticate in context")
      console.log(email)
      const response = await axios.post(baseurl+'/api/users/authenticate', {email, password});
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token; 
        localStorage.poi = response.data.token; // JWT added to local storage, to be used elsewhere, method as per Svelte app
    console.log(response);
    setUser({ email, password });
  };

  const isAuthenticated = user.email === null ? false : true

  const signout = () => {
   // setTimeout(() => 
    setUser( { email: null, password: null } ); //, 100);
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.poi = null;
    //isAuthenticated = false;
    //from = "/pois";
    
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        signout,
        user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
