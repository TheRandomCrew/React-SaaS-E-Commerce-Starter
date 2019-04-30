import React from 'react';
import { withAuth } from '@okta/okta-react';
import { useAuth } from './router/auth';
import { Box, Grid, Grommet, Layer, Text, Button } from 'grommet';
import theme from './style/globalTheme'

const App = withAuth(({ auth }) => {
  const [sidebar, setSidebar] = React.useState(false)
  const [given, setGiven] = React.useState('')
  const [authenticated, user] = useAuth(auth);
  React.useEffect(() => {
    if (user) {
      setGiven(user.given_name);
    }
  }, [user]);
  const toggle = () => {
    setSidebar(!sidebar)
  }
  return (
    // https://codesandbox.io/s/6w6wrwq1rw
    <Grommet theme={theme} full>
      <Grid fill rows={["auto", "flex", "auto"]}>
        <Box tag="header" background="brand" pad="small">
          Header

        </Box>
        <Box direction="row" justify="center">
          <Box width="small" background="light-2" style={{ display: 'none' }} animation='fadeIn'>
            {sidebar&& <Layer position='left' full='vertical' modal={false} plain={true}>
              <Box background='brand' fill='vertical'>
                <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                  <Text size='large'>Title</Text>
                </Box>
                {['First', 'Second', 'Third'].map(name => (
                  <Button
                    key={name}
                    onClick={toggle}
                    hoverIndicator={{ background: 'light-5' }}
                  >
                    <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                      <Text size='large'>{name}</Text>
                    </Box>
                  </Button>
                ))}
              </Box>
            </Layer>}
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
            <Button
              onClick={() => setSidebar(!sidebar)}
            >
              Toggle
            </Button>
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
    </Grommet>
  );
})

export default App;