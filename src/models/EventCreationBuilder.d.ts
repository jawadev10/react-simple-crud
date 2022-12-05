export type EventCreationOptions = {
    label: string;
    value: string;
}

export interface EventCreationBuilder {
    name: string | string[];
    label: string;
    component: 'text' | 'select' | 'range_picker' | 'textarea';
    required?: boolean;
    options?: EventCreationOptions[];
}