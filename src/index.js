import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/scss/argon-design-system-react.scss";

import Landing from "views/Landing";
import Login from "views/Login";
import Profile from "views/Profile";
import Register from "views/Register";
import Fantasy from "views/Fantasy";
import News from "views/News";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Profile {...props} />}/>
      <Route path="/landing-page" exact render={props => <Landing {...props} />}/>
      <Route path="/login-page" exact render={props => <Login {...props} />}/>
      <Route path="/register-page" exact render={props => <Register {...props} />}/>
      <Route path="/fantasy-page" exact render={props => <Fantasy {...props} />}/>
      <Route path="/news-page/:id" exact render={props => <News {...props} />}/>
      <Redirect to="/"/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
