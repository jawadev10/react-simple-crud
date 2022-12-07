import {Form, Input} from 'antd';
import {requiredRule} from "../Element";

export interface CustomInputProps {
    name: string;
    label: string;
    required?: boolean
}

export const CustomInput = ({name, label, required}: CustomInputProps) => {
    return (
        <Form.Item name={name} label={label} required={required} rules={requiredRule(required, label)}>
            <Input placeholder={label} id={name} required={required}/>
        </Form.Item>
    )
}


