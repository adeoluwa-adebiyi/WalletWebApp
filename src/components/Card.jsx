import { Card } from "antd";

export default ({ children, ...props }) => {
    return <Card {...{ ...props, style: { borderRadius: "10px", boxShadow: "1px 3px 10px #ccc", ...props.style }, bodyStyle: { padding: 0, borderRadius: "10px" } }}>
        {children}
    </Card>
}