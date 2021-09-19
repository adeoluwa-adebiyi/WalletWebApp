import { PageHeader as AntdPageHeader } from "antd";

export const PageHeader = ({title, ...otherProps}) => {
    return <h1 {...{style:{paddingLeft:0, paddingTop:20, paddingBottom:20, fontSize:"2em", fontWeight:"bolder"},...otherProps}}>{title}</h1>
}