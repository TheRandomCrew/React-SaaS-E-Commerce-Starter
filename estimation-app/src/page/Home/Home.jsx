import React, { useState } from 'react';
import { ProfileContainer, ProfileDetails, ProfileDetailsLeft, ProfileDetailsRight } from './style/component';
import Form from '../App/Form/Form';
import { Accordion, AccordionPanel, Text, Box, Button } from 'grommet';
import { Desktop, Android, Apple, Robot, Workshop } from 'grommet-icons';
import styled from 'styled-components'



const Gao = ({className}) => (
    <div className={className}>
        <h1 className='hola__mundo'>Hello</h1>
    </div>
)

const GaoW=styled(Gao)`
width:80%;

.hola__mundo {
    color: red;
}
`

const Home = () => {
    const [selectedColor, setSelectedColor] = useState('')
    
    return (
        <ProfileContainer name='Profile Container 💼'>
            <GaoW/>
            <h1>Estimate My App</h1>
            <p>
                Select the items below which best describe your app and the features you require.
        </p>
            <Accordion animate>
                <AccordionPanel label="💼 General information">
                    <Box direction="row" pad="small" background="light-2" justify="center">
                        <Box align="center" justify='center' width="small" >
                                <Workshop color='plain' size='xlarge' />
                        </Box>
                        <Form />
                    </Box>
                </AccordionPanel>
                <AccordionPanel label="💻/📱/🤖 Type of Software">
                    <Box pad="medium" background="light-2">
                        <Text>What kind of software do you want?</Text>
                        <Box
                            direction="row"
                            border={{ color: selectedColor ? selectedColor : 'brand', size: 'large' }}
                            pad="medium"
                            background={selectedColor}
                        >
                            <Box>
                            <Button
                                primary
                                color='yellow'
                                icon={<Desktop size='xlarge' />}
                                label={
                                    <p>Single Page Website</p>
                                }
                                onClick={() => setSelectedColor('yellow')}
                            />
                            </Box>
                            <Box>
                            <Button
                                primary
                                color='neutral-3'
                                icon={
                                    <>
                                        <Android size='xlarge' color='plain' />
                                        or
                                    <Apple size='xlarge' color='plain' />
                                    </>
                                }
                                label={
                                    <p>App</p>
                                }
                                onClick={() => setSelectedColor('neutral-3')}
                            />    
                            </Box>
                            <Box>
                            <Button
                                primary
                                color='neutral-1'
                                icon={<Robot size='xlarge' />}
                                label={
                                    <p>Other/Custom Software</p>
                                }
                                onClick={() => setSelectedColor('neutral-1')}
                            />    
                            </Box>
                        </Box>
                    </Box>
                </AccordionPanel>
            </Accordion>

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
}

export default Home