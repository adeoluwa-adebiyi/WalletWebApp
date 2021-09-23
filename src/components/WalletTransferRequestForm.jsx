import { Form, Input, Row, Col, Select, Spin } from "antd";
import Button from "../components/Button";
import { useForm } from "antd/lib/form/Form";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const WalletTransferRequestForm = ({ onFinish, isSubmitting, handleOnSearch, disabled=false, defaultValues, ...otherProps }) => {

    const [form] = useForm();

    const { id } = useParams();

    const [currencyOptions, setCurrencyOptions] = useState([{ label: "Nigerian Naira", value: "NGN" }]);

    return (
        <Form
            layout="vertical"
            initialValues={defaultValues}
            form={form}
            onFinish={onFinish}>
            <Form.Item style={{display:"none"}} name="walletId" required={true}>
                <Input type="hidden" value={id} {...{disabled}} />
            </Form.Item>
            <Row>
                <Col span={24}>
                    <Form.Item name="amount" required={true} label="Amount">
                        <Input type="number" {...{disabled}} />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Form.Item name="username" required={true} label="User">
                        <Input type="search" onChange={handleOnSearch} {...{disabled}} />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Form.Item name="currency" required={true} label="Currency">
                        <Select options={currencyOptions} {...{disabled}} />
                    </Form.Item>
                </Col>
            </Row>

            {disabled?null:<Row>
                <Col span={24}>
                    {!isSubmitting && <Form.Item name="currency" required={true}>
                        <Button type="primary" htmlType="submit">Proceed with transfer</Button>
                    </Form.Item>}
                    {isSubmitting && <Row align="middle">
                            <Spin/>
                        </Row>}
                </Col>
            </Row>}

        </Form>
    )
}

export default WalletTransferRequestForm;