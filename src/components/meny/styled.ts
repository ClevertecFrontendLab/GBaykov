import styled from 'styled-components';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

export const StyledMeny = styled(Menu)`
    @media screen and (max-width: 730px) {
        display: none;
    }
`;

export const StyledSider = styled(Sider)`
    background-color: white;
    @media screen and (max-width: 730px) {
        display: none;
    }
`;

export const LogoWrapper = styled('div')`
    display: flex;
    justify-content: center;
    margin-top: 44px;
    margin-bottom: 67px;
`;
