import {useQuery} from "@tanstack/react-query";
import {eventsApi} from "../services/events.service";

export const useEvents = () => {
    const {isLoading: eventsLoading, data: events, error: eventsError} = useQuery(['events'], eventsApi.getEvents)
    return {
        eventsLoading,
        events,
        eventsError
    };
};