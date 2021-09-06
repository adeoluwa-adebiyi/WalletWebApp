import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, Card, Form, Input, Row, Col } from "antd";
import { useForm } from "antd/lib/form/Form";
import Containers from "../unstated-containers/containers";
import { useContainer } from "unstated-next";
import withContainerProvider from "../unstated-containers/provider";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../stores/actions";
import * as AuthApi from "../apis/auth";
import currencyPic from "../static/images/bank-notes-cropped.jpg";
import { AUTH_TOKEN_KEY } from "../config/data";

const loginCardFormStyle = { minWidth: 300, maxWidth: "40%", margin: "0 auto", marginTop: "20%" };
const loginLayoutStyle = { height: "100%" };

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

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const login = async (username, password) => {
        try {
            const { authToken } = await AuthApi.login(username, password);
            if(authToken){
                sessionStorage.setItem(AUTH_TOKEN_KEY, authToken);
                dispatch(setLogin(true));
            }else{
                throw Error("Login failed. Try again");
            }
        } catch (e) {
            throw e;
        }
    }

    useEffect(()=>{
        setWindowWidth(window.innerWidth);
    })


    const onFinish = async (values) => {
        try {
            await login(values?.username, values?.password);
        } catch (e) {
            dispatch(setLogin(false));
        }
    }

    return (
        <Row style={loginLayoutStyle}>
            { (windowWidth >= 500)  &&<Col span={10}>
                <Row align="start" style={loginLayoutStyle}>
                    <img height={"100%"} style={{ objectFit: "cover" }} src={currencyPic} />
                </Row>
            </Col>}
            <Col span={14}>
                <Row>
                <Card title={null} style={loginCardFormStyle}>
                    <LoginForm onFinish={onFinish} />
                </Card>
                </Row>
            </Col>
        </Row>
    );
}

export default withContainerProvider(Login);