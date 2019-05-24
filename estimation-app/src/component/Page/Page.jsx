import React from 'react'
import { Grommet, grommet } from 'grommet';
import GlobalStore from '../../store/globalStore';
import AppNav from '../Nav/visual/Nav';

const Page = ({ children = undefined }) => (
    <GlobalStore>
        <Grommet theme={ grommet } full>
        <AppNav />
        {children}
        </Grommet>
    </GlobalStore>
)

export default Page