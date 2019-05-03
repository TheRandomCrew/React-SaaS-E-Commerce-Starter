import React from 'react'
import {
    Box,
    ResponsiveContext,
    Text,
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHeader,
    Anchor
} from "grommet";
import { SocialMedia } from '../Social/Social';
import Logo from '../Logo/Logo';

const Footer = ({ ...rest }) => (
    <ResponsiveContext.Consumer>
        {size => (
            <Box
                direction="row"
                justify='evenly'
                border={{ side: "top", color: "light-4" }}
                pad={{ top: "xsmall" }}
                {...rest}
            >
                <Box gap="small" align="start">
                    <Box
                        gap="small"
                        direction="row-responsive"
                        align="center"
                        pad={{ horizontal: "small" }} // align with margin of icons from SocialMedia
                    >
                        <Logo />
                        {size !== "small" && size !== "xsmall" && (
                            <Text weight="bold" size="large" color='violet'>
                                SaaS Starter
                            </Text>
                        )}
                    </Box>
                    <SocialMedia />
                </Box>
                <Table color='white' >
                    <TableHeader>
                        <TableRow>
                            <TableCell scope="col" border="bottom">
                                <Text weight="bold" color='white'>
                                    SaaS Starter
                                </Text>
                            </TableCell>
                            <TableCell scope="col" border="bottom">
                                <Text weight="bold" color='white'>
                                    Legal Stuff
                                </Text>
                            </TableCell>
                            <TableCell scope="col" border="bottom">
                                <Text weight="bold" color='white'>
                                    Company
                                </Text>
                            </TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell scope="row">
                                App home
                            </TableCell>
                            <TableCell>terms</TableCell>
                            <TableCell>
                                <Anchor href='http://root-code.cf/' label='site' />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell scope="row">
                                features
                            </TableCell>
                            <TableCell>privacy</TableCell>
                            <TableCell>
                                <Anchor href='http://root-code.cf/store' label='store' />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell scope="row">
                                Repository
                            </TableCell>
                            <TableCell>license</TableCell>
                            <TableCell>
                                <Anchor href='http://root-code.cf/about-us' label='about' />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
        )}
    </ResponsiveContext.Consumer>
)

export default Footer