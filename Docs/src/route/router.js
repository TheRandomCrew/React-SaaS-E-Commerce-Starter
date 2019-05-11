import React from 'react'
import {
    Switch,
    BrowserRouter as Router,
    Route, Redirect
} from 'react-router-dom'
import Page404 from '../page/Page404/Page404';
import { 
    Overview, Comparison, Migrating, NewProyect, Home 
} from '../page/Home';
import { DevDocs } from '../page/Dev';

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route
                path='/overview'
                component={Overview} />
            <Route
                path='/comparison'
                component={Comparison} />
            <Route
                path='/migrating'
                component={Migrating} />
            <Route
                path='/new'
                component={NewProyect} /> 
            <Route
                path='/dev'
                component={DevDocs} />
            <Route
                component={Page404} />
            <Redirect from='*' to='/' />
        </Switch>
    </Router>
)

export default AppRouter