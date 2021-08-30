import React, { useEffect } from "react";
import { Button, Card, Form, Input, Row, Col } from "antd";
import { useForm } from "antd/lib/form/Form";
import Containers from "../unstated-containers/containers";
import { useContainer } from "unstated-next";
import withContainerProvider from "../unstated-containers/provider";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../stores/actions";

const loginCardFormStyle = { minWidth:400, maxWidth: "40%", margin:"0 auto", marginTop: "20%" };

const { authContainer } = Containers


const LoginForm = ({ onFinish }) => {
    const [form] = useForm();

    return (
        <Form layout="vertical" {...{ onFinish }}>
            <Row>
                <Col span={24}>
                    <Form.Item name="username" label="Email:" required={true}>
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item name="password" label="Password:" required={true}>
                        <Input type="password" />
                    </Form.Item>

                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}

const Login = (props) => {

    const dispatch = useDispatch();

    const login = async(username, password) => {
        try{
            
        }catch(e){
            
        }
    }


    const onFinish = async(values) => {
        try{
            await login(values?.username, values?.password);
            dispatch(setLogin(true));
        }catch(e){
            dispatch(setLogin(false));
        }
    }

    return (
        <div>
            <Card title={null} style={loginCardFormStyle}>
                <LoginForm onFinish={onFinish}/>
            </Card>
        </div>
    );
}

export default withContainerProvider(Login);