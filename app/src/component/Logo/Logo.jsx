import React from 'react'
import {
    Box,
    Diagram,
    Stack,
    Text
} from "grommet";

const Logo = () => (
    <Stack guidingChild={1} pad="xsmall">
        <Diagram
            connections={[
                {
                    fromTarget: '2',
                    toTarget: '1',
                    thickness: 'xsmall',
                    color: 'accent-2',
                    type: 'curved'
                },
                {
                    fromTarget: '2',
                    toTarget: '3',
                    thickness: 'xsmall',
                    color: 'accent-2',
                    type: 'curved',
                },
            ]}
        />
        <Box height='70px' pad="0">
            <Box direction="row" pad="0">
                <Box
                    id="1"
                    height='20px'
                    margin="xsmall"
                    pad="xsmall"
                    background="white"
                    round='full'
                    border={{
                        "color": "blue",
                        "size": "medium",
                        "side": "all"
                    }}
                />
                <Box
                    id="2"
                    height='20px'
                    margin="xsmall"
                    pad="xsmall"
                    background="white"
                    round='full'
                    border={{
                        "color": "blue",
                        "size": "medium",
                        "side": "all"
                    }}
                />
            </Box>
            <Box direction="row" pad="0">
                <Box
                    id="3"
                    height='20px'
                    margin="xsmall"
                    pad="xsmall"
                    background="white"
                    round='full'
                    border={{
                        "color": "blue",
                        "size": "medium",
                        "side": "all"
                    }}
                />
                <Text color='white' bold>Root</Text>
            </Box>
        </Box>
    </Stack>
)

export default Logo