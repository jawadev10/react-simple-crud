import {CustomInput} from "./elements/CustomInput";
import {CustomTextArea} from "./elements/CustomTextArea";
import {CustomRangePicker} from "./elements/CustomRangePicker";
import {CustomSelect} from "./elements/CustomSelect";
import {EventCreationBuilder} from "../models/EventCreationBuilder";

export const Element = ({name, label, component, required, options }: EventCreationBuilder) => {
    switch (component) {
        case 'text':
            return (<CustomInput name={name as string} label={label} required={required} />);
        case 'textarea':
            return (<CustomTextArea name={name as string} label={label} />);
        case 'range_picker':
            return (<CustomRangePicker name={name as string[]} label={label} required={required} />);
        case 'select':
            return (<CustomSelect name={name as string} label={label} options={options} required={required} />);
        default:
            return null
    }
}

export const requiredRule = (required: boolean | undefined, label: string) => {
    return [{
        required: required,
        message: `${label} cannot be empty!`,
    }]
}