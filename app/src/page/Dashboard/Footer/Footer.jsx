import React from 'react'
import {
    Box,
    Button,
    Text,
} from "grommet";
import {  Menu } from "grommet-icons";

const Footer = () => (
    <Box
        flex={false}
        pad={{ vertical: "xsmall", left: "medium" }}
        responsive={false}
        background={{ color: "brand", dark: false }}
        direction="row"
        align="center"
        justify="between"
    >
        <Text color="light-1">5 Running Tasks</Text>
        <Button
            size="medium"
            label="Show Tasks"
            icon={<Menu color="white" />}
            reverse={true}
        />
    </Box>
)

export default Footer