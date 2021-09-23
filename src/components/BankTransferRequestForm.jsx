import { Form, Input, Row, Col, Select, Spin } from "antd";
import Button from "../components/Button";
import { useForm } from "antd/lib/form/Form";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useWallets } from "../hooks"

const BankTransferRequestForm = ({ onFinish, isSubmitting, handleOnSearch, defaultValues, disabled=false, ...otherProps }) => {

    const [form] = useForm();

    const { id } = useParams();

    const { walletData } = useWallets();

    const [currencyOptions, setCurrencyOptions] = useState([{ label: "Nigerian Naira", value: "NGN" }]);

    const [bankOptions, setBankOptions] = useState([{ label: "Polaris Bank", value: "14" }]);

    const [countryOptions, setCountryOptions] = useState([{ label: "Nigeria", value: "NG" }]);

    const [walletOptions, setWalletOptions] = useState(walletData.map((wallet)=>({label: `${wallet.currency} Wallet`, value: wallet.id})));

    const [activeCurrency, setCurrency] = useState(null);

    const handleWalletChange = (value) => {
        try{
            const selectedWalletId = value;
            const walletCurrency = walletData.filter(wallet => wallet.id === selectedWalletId?wallet.currency:null);
            setCurrency(walletCurrency[0].currency);
            form.setFieldsValue({...form.getFieldsValue(),"currency": walletCurrency[0].currency})
        }catch(e){
            alert(e.message)
        }
    }

    return (
        <Form
            layout="vertical"
            initialValues={defaultValues}
            form={form}
            onFinish={onFinish}>

            <Row>
                <Col span={24}>
                    <Form.Item name="sourceWalletId" required={true} label="Source Wallet">
                        <Select onChange={handleWalletChange} options={walletOptions} {...{disabled}} />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Form.Item name="amount" required={true} label="Amount">
                        <Input type="number" {...{disabled}} />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Form.Item name="bankId" required={true} label="Bank">
                        <Select options={bankOptions} {...{disabled}} />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={10}>
                <Col span={12}>
                    <Form.Item name="currency" required={true} label="Currency">
                        <Input disabled {...{disabled}} />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item name="destinationAccount" required={true} label="Account Number">
                        <Input type="text" {...{disabled}}/>
                    </Form.Item>
                </Col>
            </Row>

            {/* <Row>
                <Col span={24}>
                    <Form.Item name="recipient" required={true} label="Recipient">
                        <Input type="text" disabled {...{disabled}} />
                    </Form.Item>
                </Col>
            </Row> */}

            <Row>
                <Col span={24}>
                    <Form.Item name="country" required={true} label="Country">
                        <Select options={countryOptions} {...{disabled}} />
                    </Form.Item>
                </Col>
            </Row>

            {disabled?null:<Row>
                <Col span={24}>
                    {!isSubmitting &&
                        <Button type="primary" htmlType="submit">Proceed with transfer</Button>}
                    {isSubmitting && <Row align="middle">
                        <Spin />
                    </Row>}
                </Col>
            </Row>}

        </Form>
    )
}

export default BankTransferRequestForm;