import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import PrivateRoute from './PrivateRoute';
import Home from '../page/Home/Home';
import Dashboard from '../page/Dashboard/Dashboard';
import Main from '../page/Main/Main';
import About from '../page/About/About';
import Features from '../page/Features/Features';
import PageWrapper from '../component/PageWrapper';

const AppRouter = () => (
  <Router>
    <Security
      issuer={`${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`}
      client_id={process.env.REACT_APP_OKTA_CLIENT_ID}
      redirect_uri={`${window.location.origin}/implicit/callback`}
    >
      <Route path="/" exact component={() => <PageWrapper><Main /></PageWrapper>} />
      <Route path="/about" exact component={() => <PageWrapper><About /></PageWrapper>} />
      <Route path="/features" exact component={() => <PageWrapper><Features /></PageWrapper>} />
      <Route path="/implicit/callback" component={ImplicitCallback} />
      <PrivateRoute exact={false} path={'/home'} render={Home} />
      <PrivateRoute path={'/app'} render={Dashboard} />
    </Security>
  </Router>
)

export default AppRouter;