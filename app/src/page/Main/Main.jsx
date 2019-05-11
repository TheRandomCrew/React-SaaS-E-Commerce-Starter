import React from 'react'
import { Text } from "grommet";
import Hero from './Hero/Hero';
import CTA from './CTA/CTA';
import { FeaturesShort, Contact } from '../../component'

const Main = () => (
    <>
        <Hero/>
        <CTA/>
        <FeaturesShort/>
        <Contact/>
        <code>Last resort</code>
        <Text>
            In Root, we care for you!
        </Text>
    </>
)

export default Main