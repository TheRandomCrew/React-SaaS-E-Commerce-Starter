import React from 'react'
import { Route, Link } from "react-router-dom";
import './App.css';
import logo from './logo.svg'
import { NewProyect, Pathway } from '.';

function Home({ match }) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Welcome to SaaS Starter!</h1>
                <p>
                    We are glad you show interest in SaaS Starter,
                    and we will show you why is the <Link to='/comparison'>best option</Link> for you!
                </p>
                <Link to='/overview'>
                    Know more of this SaaS Starter!
                </Link>
            </header>
            <h4>We offer:</h4>
            <p>
                * Easy to start with: you just need to know the basic of React 16+,
                we made all the complicated stuff for you! You can{' '}
                <Link to='/migrating'>Migrate</Link> from other codebase
                or <Link to='/new'>Start a new proyect</Link>.
            </p>
            <p>
                * No backend: you dont have to abandon frontend if you don't want,
                but you can easily integrate a backend in any language.
            </p>
            <p>
                * Easily themable: you just need to change some variables and
                even check live your theme changing!
            </p>
            <p>
                * Everything is free... until you want otherwise:
                we offer all our plugins forever free, but you can easily
                change of plan or even change plugin for other or one of your own.
            </p>
            <p>
                Easy integrate plugins to your code!
            </p>

            <h4>Start using SaaS Starter!</h4>
            <Pathway />

            {/* Routes Section */}
            <Route path={`${match.path}new`} component={NewProyect} />
        </div>
    )
}

export default Home