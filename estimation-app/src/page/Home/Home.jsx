import React from 'react';
import { ProfileContainer, ProfileDetails, ProfileDetailsLeft, ProfileDetailsRight } from './style/component';

const Home = () => (
    <ProfileContainer>
        <h1>Estimator</h1>
        <p>
            Lets see what kind of app you want
            </p>
        <button>
            Single Page Website
            </button>
        <button>
            App
            </button>
        <button>
            Other/Custom Software
            </button>
        <ProfileDetails>
            <ProfileDetailsLeft>
                Preview
                </ProfileDetailsLeft>
            <ProfileDetailsRight>
                Settings
                </ProfileDetailsRight>
        </ProfileDetails>
    </ProfileContainer>
)

export default Home