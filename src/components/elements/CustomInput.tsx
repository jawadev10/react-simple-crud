import {Input, Form} from 'antd';

export interface CustomInputProps {
    name: string;
    label: string;
    required?: boolean
}

export const CustomInput = ({name, label, required}: CustomInputProps) => {
    return (
        <Form.Item name={name} label={label} required={required}>
            <Input placeholder={label} id={name} required={required}/>
        </Form.Item>
    )
}


