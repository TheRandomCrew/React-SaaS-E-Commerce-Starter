import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faShareAlt,
    faSearch, 
    faLink, 
    faExternalLinkAlt, 
    faBlind,
    faAlignLeft,
    faListOl,
    faChartBar,
    faExclamationTriangle,
    faLightbulb 
} from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);
library.add(faShareAlt);
library.add(faLink );
library.add(faExternalLinkAlt);
library.add(faBlind);
library.add(faListOl);
library.add(faChartBar);
library.add(faAlignLeft);
library.add(faLightbulb);
library.add(faExclamationTriangle);
    
const Home = ({user}) => (
    <div>
        <h1>Component</h1>
        {user&& <p>{user.given_name}</p>}
    </div>
)

export default Home