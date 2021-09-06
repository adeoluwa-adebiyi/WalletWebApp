import { Form, Input, Row, Col, Select, Button, Spin } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const WalletFundRequestForm = ({ onFinish, isSubmitting, ...otherProps }) => {

    const [form] = useForm();

    const { id } = useParams();

    const [currencyOptions, setCurrencyOptions] = useState([{ label: "Nigerian Naira", value: "NGN" }]);

    return (
        <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}>
            <Form.Item style={{display:"none"}} name="walletId" required={true}>
                <Input type="hidden" value={id} />
            </Form.Item>
            <Row>
                <Col span={24}>
                    <Form.Item name="amount" required={true}>
                        <Input type="number" />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Form.Item name="currency" required={true}>
                        <Select options={currencyOptions} />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    {!isSubmitting && <Form.Item name="currency" required={true}>
                        <Button type="primary" htmlType="submit">Proceed with fund</Button>
                    </Form.Item>}
                    {isSubmitting && <Row align="middle">
                            <Spin/>
                        </Row>}
                </Col>
            </Row>

        </Form>
    )
}

export default WalletFundRequestForm;