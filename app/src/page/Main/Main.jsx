import React from 'react';
import { withAuth } from '@okta/okta-react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Box, Grid, Grommet, Layer, Button, ResponsiveContext } from 'grommet';
import { Login, Logout, Close, Menu } from 'grommet-icons'
import { useAuth } from '../../router/auth';
import { theme } from '../../style/globalTheme';
import styled from 'styled-components';

const NavLink = props => {
    // eslint-disable-next-line 
    const passProps = Object.keys(RouterNavLink.propTypes).reduce(
        (passedProps, propName) => {
            if (props.hasOwnProperty(propName)) {
                passedProps[propName] = props[propName];
            }

            return passedProps;
        },
        {}
    );

    return <RouterNavLink {...passProps}>{props.children}</RouterNavLink>;
};

const StyledLink = styled(NavLink)`

color: white;

&.active {
    color: red;
}
&:hover {
    color: yellow;
}
`;

const Main = withAuth(({ auth, open }) => {
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
                <Box
                    tag='header'
                    direction='row'
                    background='brand'
                    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
                >
                    <ResponsiveContext.Consumer>
                        {responsive =>
                            responsive === "small" ? (
                                <Button
                                    onClick={() => setSidebar(!sidebar)}
                                    icon={<Menu />}
                                />
                            ) : (
                                    <Box
                                        fill
                                        direction='row'
                                        align='center'
                                        justify='evenly'
                                    >
                                        <Box>LOGO</Box>
                                        <StyledLink to='/about'>About</StyledLink>
                                        <StyledLink to='/features'>Features</StyledLink>
                                    </Box>
                                )}
                    </ResponsiveContext.Consumer>
                    {authenticated !== null && <Box
                        fill
                        direction='row'
                        align='center'
                        justify='end'
                    >
                        {authenticated && <StyledLink to='/app'>{given + ' Dashboard'}</StyledLink>}
                        <Button
                            primary
                            color='accent-3'
                            pad={{ horizontal: 'small', vertical: 'small' }}
                            onClick={() => authenticated ? auth.logout() : auth.login()}
                            label={authenticated ? 'Logout' : 'Login'}
                            icon={authenticated ? <Logout /> : <Login />}
                        />
                    </Box>
                    }
                </Box>
                <Box direction="row" justify="center">
                    <Box width="small" background="light-2" style={{ display: 'none' }} animation='fadeIn'>
                        {sidebar && <Layer position='left' full='vertical' modal={false} plain={true}>
                            <Box background='brand' fill='vertical'>
                                <Box pad={{ horizontal: 'medium', vertical: 'small' }} alignSelf='end'>
                                    <Button
                                        onClick={() => setSidebar(!sidebar)}
                                        icon={<Close />}
                                    />
                                </Box>
                                {['about', 'features'].map(name => (
                                    <Button
                                        key={name}
                                        onClick={toggle}
                                    >
                                        <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                                        <StyledLink to={'/'+name}>{name.toUpperCase()}</StyledLink>
                                        </Box>
                                    </Button>
                                ))}
                            </Box>
                        </Layer>}
                    </Box>
                    <Box overflow="auto" width="large">


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

export default Main;