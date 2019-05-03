import React from 'react';
import { withAuth } from '@okta/okta-react';
import { Box, Grid, Grommet } from 'grommet';
import { useAuth } from '../router/auth';
import { theme } from '../style/globalTheme';
import AppHeader from './Nav/visual/AppHeader';
import Sidebar from './Sidebar/Sidebar';

const PageWrapper = withAuth(({ auth, children=undefined }) => {
    const [sidebar, setSidebar] = React.useState(false)
    const [authenticated, user] = useAuth(auth);
    
    const toggle = () => {
        setSidebar(!sidebar)
    }
    return (
        // https://codesandbox.io/s/6w6wrwq1rw
        <Grommet theme={theme} full>
            <Grid fill rows={["auto", "flex", "auto"]}>
                <Box
                    tag='header'
                    direction='row'
                    background='brand'
                    pad={{ left: 'medium', right: 'small', vertical: '0' }}
                    margin={{vertical:'0'}}
                >
                    <AppHeader 
                        toggle={toggle}
                        authenticated={authenticated}
                        user={user}
                        auth={auth}
                    />
                </Box>
                <Box direction="row" justify="center">
                    <Box tag='aside' width="small" background="light-2" style={{ display: 'none' }} animation='fadeIn'>
                        <Sidebar
                            toggle={toggle}
                            sidebar={sidebar}
                        />
                    </Box>
                    <Box overflow="auto" width="large">
                        {children}
                    </Box>
                </Box>
                <Box tag="footer" pad="small" background="dark-1">
                    footer
          </Box>
            </Grid>
        </Grommet>
    );
})

export default PageWrapper;