import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  console.log(context.isAuthenticated)
  //console.log(context.user)
  //console.log(context.user.username)
  const { history } = props;

  return context.isAuthenticated ? (
    <>
        <p>
      Welcome {context.user.email} <button onClick={() => 
        context.signout()
        }>Sign out</button>
    </p>
    </>
  ) : (
    <p>
      You are not logged in{" "}
      <button onClick={() => history.push("/login")}>Login</button>
    </p>
  );
};

export default withRouter(BaseAuthHeader);
