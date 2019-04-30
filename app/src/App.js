import React from 'react';
import { withAuth } from '@okta/okta-react';
import { useAuth } from './router/auth';
import { Box, Grid } from 'grommet';

const App = withAuth(({ auth }) => {
  const [given, setGiven] = React.useState('')
  const [authenticated, user] = useAuth(auth);
  React.useEffect(() => {
    if (user) {
      setGiven(user.given_name);
    }
  }, [user]);

  return (
    // https://codesandbox.io/s/6w6wrwq1rw
    <Grid fill rows={["auto", "flex", "auto"]}>
      <Box tag="header" background="brand" pad="small">
        Header
          </Box>
      <Box direction="row" justify="center">
        <Box width="small" background="light-2" style={{ display: 'block' }} animation='fadeIn'>
          sidebar
            </Box>
        <Box overflow="auto" width="large">
          {authenticated !== null && (
            <button
              onClick={() => authenticated ? auth.logout() : auth.login()}
              className="App-link"
            >
              Log {authenticated ? 'out' : 'in'}{given && <p>{given}</p>}
            </button>
          )}
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
        </Box>
      </Box>
      <Box tag="footer" pad="small" background="dark-1">
        footer
          </Box>
    </Grid>
  );
})

export default App;