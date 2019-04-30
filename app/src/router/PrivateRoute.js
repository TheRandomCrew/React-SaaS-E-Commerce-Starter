import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { withAuth } from '@okta/okta-react';
import { useAuth } from './auth';

const PrivateRoute = withAuth(({ auth, render: Component, ...rest }) => {
  const [authenticated, user] = useAuth(auth);
  return (
    <Route
      {...rest}
      render={props =>
        authenticated!== false ? (
          <Component {...props} user={user}/>
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
});

export default PrivateRoute