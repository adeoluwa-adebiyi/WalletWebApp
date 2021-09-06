import { Layout } from "antd";
import { containerStyle } from "../styles";

export const Container = ({ style, children, ...otherProps }) =>{
    return (
        <Layout style={{...containerStyle, ...style}}>
            {children}
        </Layout>
    )
}