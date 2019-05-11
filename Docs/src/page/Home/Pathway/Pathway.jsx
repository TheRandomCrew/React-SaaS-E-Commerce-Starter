import React from 'react'
import {  Link } from "react-router-dom";

const Pathway = () => (
    <div>
        <h1>Choose your way:</h1>
        <p>As a <Link to='/dev'>Dev</Link>: you know something of React and want to use SaaS starter for free or with some variants.</p>
        <p>As an User: you want us to help you getting started ASAP! (app to estimate prices and shop)</p>
    </div>
)

export default Pathway