import styled from 'styled-components';
import NavLink from '../logic/NavLink';

export const StyledLink = styled(NavLink)`
    color: white;

    &.active {
        color: red;
    }
    &:hover {
        color: yellow;
    }
`;