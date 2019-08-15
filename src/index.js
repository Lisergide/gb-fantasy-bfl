import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import Landing from "views/examples/Landing.jsx";
import Login from "views/examples/Login.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";
import Fantasy from "views/Fantasy";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Profile {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login-page" exact render={props => <Login {...props} />} />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />
      <Route
        path="/fantasy-page"
        exact
        render={props => <Fantasy {...props} />}
      />
      <Route
        path="/components-page"
        exact
        render={props => <Index {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
