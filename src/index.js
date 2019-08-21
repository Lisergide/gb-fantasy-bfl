import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Security} from '@okta/okta-react';

// styles
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/scss/argon-design-system-react.scss";

// okta config file
import config from './app.config';

import App from "./App";

function onAuthRequired({history}) {
  history.push('/login-page');
}

ReactDOM.render(
  <Router>
    <Security
      issuer={config.issuer}
      client_id={config.client_id}
      redirect_uri={config.redirect_uri}
      onAuthRequired={onAuthRequired}>
      <App/>
    </Security>
  </Router>,
  document.getElementById("root")
);
