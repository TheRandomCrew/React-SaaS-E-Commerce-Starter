import React from 'react'
import { Link } from "react-router-dom";

const CRA = () => (
    <div>
        <h1>CRA</h1>
        <code>git clone </code> <br />
        <code>cd app && npm i</code>
        <br />
        Follow the instructions in the README.md

        <p>
            To deep more on the general structure of the code 
            visit <Link to='/dev/arch'>
                General Architecture
        </Link> or for Folder Setup, visit <Link to='/dev/folder-setup'>
                Folder Setup
        </Link>
        </p>
    </div>
)

export default CRA