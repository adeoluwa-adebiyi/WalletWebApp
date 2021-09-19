import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout, Col, Row, Avatar, Dropdown } from "antd";
import DropdownButton from "antd/lib/dropdown/dropdown-button";
import MenuItem from "antd/lib/menu/MenuItem";
import Menu from "rc-menu/lib/Menu";
import { appNavBrandStyle } from "../styles";
import { Container } from "./Container";

const { Header } = Layout;



const AppNav = (props) => {

    const menu = (
        <Menu>
            <MenuItem icon={<FontAwesomeIcon icon={["fa", "cogs"]} />} title="Settings">
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            </MenuItem>
        </Menu>
    )

    return (<Header>
        <Container style={appNavBrandStyle}>
            <Row style={{ width: "100%" }}>
                <Col span={4}>
                </Col>

                <Col span={20}>
                    <Row align="end" gutter={10}>
                        <Col>
                            <Avatar size={30} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" />
                        </Col>
                        <Col>
                        
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    </Header>);
}

export default AppNav;