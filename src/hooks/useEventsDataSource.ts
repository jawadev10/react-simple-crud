import {useEvents} from "./useEvents";

export const useEventsDataSource = () => {
    const {events} = useEvents();
    const dataSource = events?.map((event) => ({
        ...event,
        key: event.id
    }));
    return {
        dataSource
    };
};