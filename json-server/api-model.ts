export type EventCreationOptions = {
    label: string;
    value: string;
}

export interface EventCreationBuilderDto {
    name: string | string[];
    label: string;
    component: 'text' | 'select' | 'range_picker' | 'textarea';
    required?: boolean;
    options?: EventCreationOptions[];
}

export interface EventDto {
    id: string;
    title: string;
    type: string;
    startDate: string;
    endDate?: string;
}