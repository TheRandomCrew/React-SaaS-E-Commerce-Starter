import React from 'react';
import { withAuth } from '@okta/okta-react';
import { Box, Grid, Grommet, grommet, Button } from 'grommet';
import { useAuth } from '../../router/auth';
import { theme } from '../../style/globalTheme';
import { Nav } from '../Nav';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
// import { v1 } from '../../style/v1';

const PageWrapper = withAuth(({ auth, children = undefined }) => {
    const [themeID, setThemeID] = React.useState('default')
    const [sidebar, setSidebar] = React.useState(false)
    const [authenticated, user] = useAuth(auth);

    const toggle = () => {
        setSidebar(!sidebar)
    }
    const toggleThemeID = () => {
        themeID === 'default' ? setThemeID('custom1') : setThemeID('default');
    }
    return (
        // https://codesandbox.io/s/6w6wrwq1rw
        <Grommet theme={themeID === 'default' ? grommet : theme} full>
            <Grid fill rows={["auto", "flex", "auto"]}>
                <Box
                    tag='header'
                    direction='row'
                    background='brand'
                    pad={{ left: 'medium', right: 'small', vertical: '0' }}
                    margin={{ vertical: '0' }}
                >
                    <Nav
                        toggle={toggle}
                        authenticated={authenticated}
                        user={user}
                        auth={auth}
                    />
                    <Button onClick={() => toggleThemeID()} label='Theme' />
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
                <Box tag="footer" pad="0" margin='0' background="dark-1">
                    <Footer />
                </Box>
            </Grid>
        </Grommet>
    );
})

export default PageWrapper;