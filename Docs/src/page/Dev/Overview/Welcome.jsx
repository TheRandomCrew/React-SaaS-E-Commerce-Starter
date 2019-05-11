import React from 'react'
import { Link } from "react-router-dom";

const Welcome = () => (
    <div>
        <h1>Welcome fellow Dev!</h1>
        <p>
            At Root we roots for your success (pun intended),
            as we provide you with all the tools you might
            need to bootstrap your app in no time!
        </p>
        <p>
            We have a SaaS starter, and more on the works. 
            If you want to know more about SaaS, go <Link to='/dev/saas'>
            here
        </Link>.
        </p>
        The easiest way to start is with Create React App 
        ( <Link to='/dev/cra'>CRA</Link> ), 
        but if you need something mode advanced 
        try <Link to='/dev/next'>Next.js</Link> or 
        browse tutorial below.
    </div>
)

export default Welcome