import React from 'react'
import { Link } from "react-router-dom";

const GeneralArch = () => (
    <div>
        <h1>General Architecture:</h1>
        <p>
            In the first level we have the Global settings, a set of folders
            that represent data accesible to every component in the proyect.
            We then have a page/ folder where we separate each diferent
            unit of the whole app (following the route in direction bar),
            and inside each page we have all the code needed for this page to work.
        </p>
        <p>
            Inside each page we put all the sections which make the page, in
            an atomic way, with simple and compound components in separate folders.
        </p>
        <p>
            More on this on <Link to='/dev/folder-setup'>
            Folder Setup
        </Link>
        </p>
    </div>
)

export default GeneralArch