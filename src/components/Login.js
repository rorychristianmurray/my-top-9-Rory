import React, { useState } from "react";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  handleChanges = event => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  login = event => {
    console.log("login event", event);
    event.preventDefault();
    props.login(credentials);
    // use .then to push to page once hooked up
    setCredentials({
      username: "",
      password: ""
    });
  };

  return <div>Login incoming</div>;
};

export default Login;
