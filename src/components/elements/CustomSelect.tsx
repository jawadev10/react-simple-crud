import {Form, Select} from 'antd';
import {EventCreationOptions} from "../../models/EventCreationBuilder";

export interface CustomSelectProps {
    name: string;
    label: string;
    options?: EventCreationOptions[]
}

export const CustomSelect = ({name, label, options}: CustomSelectProps) => {
    return (
        <Form.Item name={name} label={label}>
            <Select options={options} />
        </Form.Item>
    )
}