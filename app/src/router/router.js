import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import App from '../App';
import PrivateRoute from './PrivateRoute';
import Home from '../page/Home';

const AppRouter = () => (
    <Router>
    <Security
      issuer={`${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`}
      client_id={process.env.REACT_APP_OKTA_CLIENT_ID}
      redirect_uri={`${window.location.origin}/implicit/callback`}
    >
      <Route path="/" exact component={App} />
      <Route path="/implicit/callback" component={ImplicitCallback} />
      <PrivateRoute exact={false} path={'/home'} render={Home} />
    </Security>
</Router>
)

export default AppRouter;