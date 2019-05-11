import React from 'react'

const SectionFolderSetUp = () => (
    <div>
        <h1>Section Folder Set up</h1>
        <p>
            We use a folder per Section set up, meaning that every piece of layout
            have a diferent folder. 
        </p>
        <p>
            Separating the app in pages and each pages in sections let us manage 
            the app as modular pieces, each of them individual and self containing.
            This makes each part really composable and even you can copy all 
            the non-visual code in other proyects!
        </p>
        <p>
            Take note that the app is made from these folders: 
            + component: simple modules shared by 2 or more compound modules.
            + page: each page inside its unique folder.
            + route: represent the routing map when there are 2 or more pages.
            + store: here goes a global store to use in all the app.
            + style: here goes css or styled components meant to be used more times.
            + util: auxiliar code as JS functions
            + service: external cals like fetchm axios or web cache.
        </p>
        <p>
            Inside each Section we have these folders:
            + visual: just visual code. intended to be changed when changing proyect or visual framework.
            + logical: all bussiness logic here, as well ac conection with store
            + store: module wide store to manage local store
            + style: CSS or styled components meat to be used in the module
            + util: auxiliar code as JS functions
        </p>

        <h3>How to add a page</h3>
        <h3>How to how to add an external service</h3>
        <h3>How to how to use global store</h3>
    </div>
)

export default SectionFolderSetUp