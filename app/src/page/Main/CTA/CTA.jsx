import React from 'react'
import { Text, Heading, Button, Box } from "grommet";

const CTA = () => (
    <div>
        <Heading level="2" margin="none" size="small">
            We make things Easy!
        </Heading>
        <Text weight="bold">
            Try this starter and get into selling in less than the competence!
        </Text>
        <Box direction="row" justify="center" align='center'>
            <Button color='brand' label='I am a Dev' />
            <Button primary color='accent-2' label='Tell me More' dark />
            <Button color='accent-1' label='Take my money!' />
        </Box>
        <code>What about a tab to make people choose?</code>
    </div>
)

export default CTA