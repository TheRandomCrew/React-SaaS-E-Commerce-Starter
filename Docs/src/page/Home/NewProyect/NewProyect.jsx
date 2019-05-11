import React from 'react'
import { Route, Link } from "react-router-dom";
import DevGuide from './DevGuide';
import WeMakeIt from './WeMakeIt';

const NewProyect = ({ match }) => (
    <div>
        <h1>Starting a proyect is Easy!</h1>
        <Link to={`${match.url}/dev`}>
            Dev
        </Link> / {' '}
        <Link to={`${match.url}/wemakeit`}>
            We Make It
        </Link>
        {/* Routes Section */}
        <Route path={`${match.path}/:client`} component={({ match }) => {
            if (match.params.client === 'dev') {
                return (
                    <div>
                        <h1>Dev</h1>
                        <DevGuide />
                    </div>
                )
            }
            if (match.params.client === 'wemakeit') {
                return (
                    <div>
                        <h1>we make it</h1>
                        <WeMakeIt />
                    </div>
                )
            } else {
                console.log(match.params.client)
                return (
                    <div>
                        <h1>Hello</h1>
                        {match.params.client}
                    </div>
                )
            }
        }} />
        <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
)

export default NewProyect;