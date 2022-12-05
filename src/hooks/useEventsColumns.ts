import {useEventCreationBuilder} from "./useEventCreationBuilder";
import {EventColumnHeader} from "../models/EventColumnHeader";

export const useEventsColumns = () => {
    const {eventsCreationbuilder} = useEventCreationBuilder();
    const columns: EventColumnHeader[] =  [];
    eventsCreationbuilder?.forEach((eventBuilder) => {
        if (eventBuilder.component === 'range_picker') {
            [...eventBuilder.name].forEach((name: string) => {
                const columnHeader: EventColumnHeader = {
                    key: name,
                    title: name,
                    dataIndex: name
                };
                columns.push(columnHeader);
            });
        } else {
            const columnHeader: EventColumnHeader = {
                key: eventBuilder.name as string,
                title: eventBuilder.label,
                dataIndex: eventBuilder.name as string
            };
            columns.push(columnHeader);
        }
    });
    return {
        columns
    }
};