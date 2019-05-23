import React from 'react'
import { Nav, NavHeader, NavLeft, NavCenter, NavRight, MenuLink } from '../style/component'

const AppNav = () => (
    <Nav>
        <NavHeader>
            <NavLeft>
                <MenuLink href='http://www.google.com'>
                    Root
                </MenuLink>
            </NavLeft>
            <NavCenter>
                j
            </NavCenter>
            <NavRight>
                l
            </NavRight>
        </NavHeader>
    </Nav>
)


export default AppNav