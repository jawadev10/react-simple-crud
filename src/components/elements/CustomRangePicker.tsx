import {DatePicker, Form} from "antd";

export interface CustomRangePickerProps {
    name: string[];
    label: string;
}

const {RangePicker} = DatePicker;


export const CustomRangePicker = ({name, label}: CustomRangePickerProps) => {
    return (
        <Form.Item name={name} label={label}>
            <RangePicker/>
        </Form.Item>
    )
}