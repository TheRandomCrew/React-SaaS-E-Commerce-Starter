import styled from 'styled-components'

export const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

export const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;

export const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

export const NavRight = styled.div`
  width: 33.333%;
  text-align: right;

  svg {
    margin-right: 20px;
  }
`;

export const MenuLink = styled.a``;