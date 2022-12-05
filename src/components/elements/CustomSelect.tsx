import {Form, Select} from 'antd';
import {EventCreationOptions} from "../../models/EventCreationBuilder";

export interface CustomSelectProps {
    name: string;
    label: string;
    options?: EventCreationOptions[];
    required?: boolean;
}

export const CustomSelect = ({name, label, options, required}: CustomSelectProps) => {
    return (
        <Form.Item name={name} label={label} required={required}>
            <Select options={options}  />
        </Form.Item>
    )
}