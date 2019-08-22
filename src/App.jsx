import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {SecureRoute, ImplicitCallback} from '@okta/okta-react';

// routes
import routes from './routes';
// import secureRoutes from './secureRoutes';
import Profile from 'views/Profile';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          {routes.map((route, idx) => <Route key={idx} {...route}/>)}
          <Route path="/implicit/callback" component={ImplicitCallback}/>
          {/*{secureRoutes.map((route, idx) => <SecureRoute key={idx} {...secureRoutes}/>)}*/}
          <SecureRoute path="/profile-page" component={Profile}/>
          <Redirect to="/"/>
        </Switch>
      </>
    )
  }
}