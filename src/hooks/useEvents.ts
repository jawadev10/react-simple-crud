import {useQuery} from "@tanstack/react-query";
import {eventsApi} from "../services/events.service";

export const useEvents = (reFetching?: boolean) => {
    const {isLoading: eventsLoading, data: events, error: eventsError} = useQuery(['events'], eventsApi.getEvents, {refetchOnReconnect: true})
    return {
        eventsLoading,
        events,
        eventsError
    };
};