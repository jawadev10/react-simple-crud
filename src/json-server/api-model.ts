export type ViewOption = {
    label: string;
    value: string;
}

export interface ViewDto {
    name: string | string[];
    label: string;
    component: 'text' | 'select' | 'range_picker' | 'textarea';
    required?: boolean;
    options?: ViewOption[];
}