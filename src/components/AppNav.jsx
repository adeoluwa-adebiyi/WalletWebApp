import { Layout, Col, Row } from "antd";
import { appNavBrandStyle } from "../styles";
import { Container } from "./Container";

const { Header } = Layout;



const AppNav = (props) => {
    return (<Header>
        <Container style={appNavBrandStyle}>
            <Row>
                <Col span={4}>
                    <h2>Supapay</h2>
                </Col>
            </Row>

        </Container>
    </Header>);
}

export default AppNav;