export interface Event {
    id: string;
    title: string;
    type: string;
    startDate: Date;
    endDate?: Date;
    description?: string;
}