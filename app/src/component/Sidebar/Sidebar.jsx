import React from 'react'
import { Box, Layer, Button } from 'grommet';
import { Close } from 'grommet-icons'
import { StyledLink } from '../Nav/style/components';

const Sidebar = ({ toggle, sidebar }) => (
    <>
        {sidebar && <Layer position='left' full='vertical' modal={false} plain={true}>
            <Box background='brand' fill='vertical'>
                <Box pad={{ horizontal: 'medium', vertical: 'small' }} alignSelf='center'>
                    <Button
                        primary
                        onClick={toggle}
                        icon={<Close color='white' />}
                        color='status-critical'
                    />
                </Box>
                <StyledLink to='/'>
                    Saas
                </StyledLink>
                {['about', 'features'].map(name => (
                    <Button
                        key={name}
                        onClick={toggle}

                    >
                        <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                            <StyledLink to={'/' + name}>{name.toUpperCase()}</StyledLink>
                        </Box>
                    </Button>
                ))}
            </Box>
        </Layer>}
    </>
)

export default Sidebar