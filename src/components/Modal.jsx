import React from "react";
import { Modal } from "antd";
import Card from "./Card";
import styled, { createGlobalStyle } from "styled-components"

const style = {
    borderRadius: "10px !important"
}

const ModalStyle = createGlobalStyle`
.ant-modal-content{
    margin: 0 auto !important;
    border-radius: 15px !important;
    padding: 0px !important;
    width: 350px;
}
.ant-modal-body{
    padding: 0px !important;
}
`;

const CustomModal =  ({title,children, ...otherProps}) => {
    return <React.Fragment>
        <ModalStyle/>
        <Modal style={{borderRadius:200}} {...{bodyStyle:{...style},...otherProps}}>
            <Card title={title}>
                {children}
            </Card>
        </Modal>
    </React.Fragment>
}

export default CustomModal;