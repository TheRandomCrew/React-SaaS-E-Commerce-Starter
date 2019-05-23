import React from 'react'
import GlobalStore from '../../store/globalStore';
import AppNav from '../Nav/visual/Nav';

const Page = ({ children = undefined }) => (
    <GlobalStore>
        <AppNav />
        {children}
    </GlobalStore>
)

export default Page