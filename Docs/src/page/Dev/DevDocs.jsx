import React from 'react'
import { Route, Link } from "react-router-dom";
import SaaS from './Overview/SaaS';
import Welcome from './Overview/Welcome';
import CRA from './GettingStarted/CRA';
import Next from './AdvancedTopics/Next';
import SectionFolderSetUp from './GettingStarted/SectionFolderSetUp';
import GeneralArch from './GettingStarted/GeneralArch';
import Routing from './GettingStarted/Routing';

const DevDocs = ({ match }) => (
    <>
        Overview
        <Link to={`${match.path}/saas`}>
            SaaS
        </Link> 
        <br/>
        Getting Started
        <Link to={`${match.path}/cra`}>
            CRA
        </Link> /{' '}
        <Link to={`${match.path}/arch`}>
            Architecture
        </Link> /{' '}
        <Link to={`${match.path}/folder-setup`}>
            Folder Setup
        </Link>
        <br/>
        Advanced Topics
        <Link to={`${match.path}/next`}>
            Next.js
        </Link> /{' '}
        <Route path={`${match.path}/:tutorial`} component={({ match }) => {
            switch (match.params.tutorial) {
                case 'saas':
                    return <SaaS />
                case 'cra':
                    return <CRA />
                case 'next':
                    return <Next />
                case 'arch':
                    return <GeneralArch />
                case 'folder-setup':
                    return <SectionFolderSetUp />
                    case 'routing':
                    return <Routing/>
                default:
                    return <Welcome />
            }
        }} />
        <Route
            exact
            path={match.path}
            render={() => <Welcome />}
        />
    </>
)

export default DevDocs