import {Form, Select} from 'antd';
import {EventCreationOptions} from "../../models/EventCreationBuilder";
import {requiredRule} from "../Element";

export interface CustomSelectProps {
    name: string;
    label: string;
    options?: EventCreationOptions[];
    required?: boolean;
}

export const CustomSelect = ({name, label, options, required}: CustomSelectProps) => {
    return (
        <Form.Item name={name} label={label} required={required} rules={requiredRule(required, label)}>
            <Select options={options}  />
        </Form.Item>
    )
}