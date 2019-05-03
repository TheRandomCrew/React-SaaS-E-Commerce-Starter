import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

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

export default NavLink;