import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Page } from '../component';
import Home from '../page/Home/Home';

const AppRouter = () => (
    <Router>
        <Page>
            <Route path="/" exact component={() => <Home />} />
        </Page>
    </Router>
)

export default AppRouter;