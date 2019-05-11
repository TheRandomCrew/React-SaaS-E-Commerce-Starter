import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import PrivateRoute from './PrivateRoute';
import { Home, Dashboard, Main, About, Features } from '../page'
import { Page } from '../component';

const AppRouter = () => (
  <Router>
    <Security
      issuer={`${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`}
      client_id={process.env.REACT_APP_OKTA_CLIENT_ID}
      redirect_uri={`${window.location.origin}/implicit/callback`}
    >
      <>
        <Page>
          <Route path="/" exact component={() => <Main />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/features" exact component={() => <Features />} />
        </Page>
      </>
      <Route path="/implicit/callback" component={ImplicitCallback} />
      <PrivateRoute exact={false} path={'/home'} render={Home} />
      <PrivateRoute path={'/app'} render={Dashboard} />
    </Security>
  </Router>
)

export default AppRouter;