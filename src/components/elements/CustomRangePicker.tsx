import {DatePicker, Form} from "antd";

export interface CustomRangePickerProps {
    name: string[];
    label: string;
    required?: boolean;
}

const {RangePicker} = DatePicker;


export const CustomRangePicker = ({name, label, required}: CustomRangePickerProps) => {
    return (
        <Form.Item name={name} label={label} required={required}>
            <RangePicker />
        </Form.Item>
    )
}