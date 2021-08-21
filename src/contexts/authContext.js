import React, { useState, createContext } from "react";
import axios from "axios";
import { login } from "../api/poi-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const [user, setUser] = useState({ email: null, password: null });
  
  const authenticate = async (email, password) => {
      console.log("in authenticate in context")
      console.log(email)

      const authenticate = await login(email,password);
      console.log(authenticate);
        
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
