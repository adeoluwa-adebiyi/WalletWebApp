import { Col, Row } from "antd";
import AntdMenuItem from "antd/lib/menu/MenuItem";
import styled, {createGlobalStyle} from "styled-components";

export const MenuItemStyle = createGlobalStyle`
.ant-menu-light .ant-menu-item:hover, .ant-menu-light .ant-menu-item-active, .ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open, .ant-menu-light .ant-menu-submenu-active, .ant-menu-light .ant-menu-submenu-title:hover{
    // border-radius: 10px;
    color: #f02323 !important;
    background-color: transparent !important;
    // box-shadow: 3px 3px 10px #ca6060;
}

.ant-menu-light .ant-menu-item:hover, .ant-menu-light .ant-menu-item-active, .ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open, .ant-menu-light .ant-menu-submenu-active, .ant-menu-light .ant-menu-submenu-title:hover ::after{
}

.ant-menu-light .ant-menu-item:hover, .ant-menu-light .ant-menu-item-active, .ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open, .ant-menu-light .ant-menu-submenu-active, .ant-menu-light .ant-menu-submenu-title a{
    // border-radius: 10px;
    color: #f02323 !important;
    background-color: transparent !important;
    // box-shadow: 3px 3px 10px #ca6060;
}

.ant-menu-item a{
    color: #000;
}

.ant-menu-item a:hover{
    font-weight: bolder;
}

.ant-menu .ant-menu-item-selected a:active{
    color: #000 !important;
    font-weight: bolder;
}
.ant-menu-link:active{
    color: #000 !important;
}
`;

const MenuItem = ({ children, ...otherProps }) => {
    const {icon} = otherProps;
    return <div>
        <MenuItemStyle/>
        <AntdMenuItem
        {...otherProps} className="ant-menu-item"
        renderItem={(siderCollapsed) => { 
            console.log({siderCollapsed});
            return  <li><Row>
                {siderCollapsed&&<><Col sm={4} md={4} lg={4} xl={4} xxl={4}>
                   <span>{icon}</span>
                </Col>
                <Col sm={20} md={20} lg={20} xl={20} xxl={20}>
                    <span>{children}</span>
                </Col></>}
                {!siderCollapsed && <Col sm={24} md={24} lg={24} xl={24} xxl={24}>
                   <span>{icon}</span>
                </Col>}
            </Row>
            </li>
        }}>
    </AntdMenuItem></div>
}

export default styled(MenuItem)`

`;