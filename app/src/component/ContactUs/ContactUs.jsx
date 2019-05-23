import React from 'react'
import { Heading, Button,  MaskedInput, TextInput } from "grommet";

const ContactUs = () => (
    <div>
        <Heading level={3} >
            Want some special feature or something more of your style?
        </Heading>
        Some image
        <MaskedInput placeholder='Your email' />
        <TextInput placeholder='Your Message' />
        <Button label='Contact Us' type='submit' primary/>
    </div>
)

export default ContactUs