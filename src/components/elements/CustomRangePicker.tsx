import {DatePicker, Form} from "antd";
import {requiredRule} from "../Element";

export interface CustomRangePickerProps {
    name: string[];
    label: string;
    required?: boolean;
}

const {RangePicker} = DatePicker;


export const CustomRangePicker = ({name, label, required}: CustomRangePickerProps) => {
    return (
        <Form.Item name={name} label={label} required={required} rules={requiredRule(required, label)}>
            <RangePicker />
        </Form.Item>
    )
}