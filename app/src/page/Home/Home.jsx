import React from 'react'
import { Cycle } from 'grommet-icons';
const Home = ({user}) => (
    <div>
        <h1>Welcome</h1>
        {user&& <p>{user.given_name}</p>}
        <Cycle/>
    </div>
)

export default Home