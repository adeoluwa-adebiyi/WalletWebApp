import { Button } from "antd";
import styled from "styled-components";
import { OrangeRedYellowGradient } from "./BalanceCard";

const CustomButton = (props) => {
    return <Button {...props}/>
}

export default styled(CustomButton)`
    border-radius: 5px !important;
    background: ${OrangeRedYellowGradient};
    border: none;
    width: 100% important;
    padding-top: 10px;
    padding-bottom: 10px;
    max-height: auto !important;
    height: auto !important;
    min-width: 100% !important;
    max-width: 100% !important;
    &:selected{
        background: ${OrangeRedYellowGradient};
    }
    &:active{
        background: ${OrangeRedYellowGradient};
    }
    &:hover{
        background: ${OrangeRedYellowGradient};
        box-shadow: 1px 3px 3px #ccc;
    }
`;