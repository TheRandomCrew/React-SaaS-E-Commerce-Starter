import React from 'react'
import { Box, Button, ResponsiveContext } from 'grommet';
import { Login, Logout, Menu } from 'grommet-icons'
import { StyledLink } from '../style/components';
import Logo from '../../Logo/Logo';

function AppHeader({ toggle, authenticated, user, auth }) {
    const [given, setGiven] = React.useState('');

    React.useEffect(() => {
        if (user) {
            setGiven(user.given_name);
        }
    }, [user]);

    return (
        <>
            <ResponsiveContext.Consumer>
                {responsive =>
                    responsive === "small" ? (
                        <Button
                            onClick={toggle}
                            icon={<Menu />}
                        />
                    ) : (
                            <Box
                                fill
                                direction='row'
                                align='center'
                                justify='evenly'
                            >
                                <Logo />
                                <StyledLink to='/about'>About</StyledLink>
                                <StyledLink to='/features'>Features</StyledLink>
                            </Box>
                        )}
            </ResponsiveContext.Consumer>
            {authenticated !== null && <Box
                margin={{vertical:'0'}}
                pad='xsmall'
                fill='vertical'
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
        </>
    )
}

export default AppHeader