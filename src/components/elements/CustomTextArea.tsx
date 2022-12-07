import {Form, Input} from 'antd';

export interface CustomTextAreaProps {
    name: string;
    label: string;
}

const {TextArea} = Input;

export const CustomTextArea = ({name, label}: CustomTextAreaProps) => {
    return (
        <Form.Item name={name} label={label}>
            <TextArea rows={4} placeholder={label} />
        </Form.Item>
    )
}