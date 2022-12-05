import {useQuery} from "@tanstack/react-query";
import {eventsApi} from "../services/events.service";

export const useEventCreationBuilder = () => {
    const {isLoading: eventsCreationBuilderLoading, data: eventsCreationbuilder, error: eventsCreationbuilderError} = useQuery(['getEventsCreationBuilder'], eventsApi.getEventsCreationBuilder)
    return {
        eventsCreationBuilderLoading,
        eventsCreationbuilder,
        eventsCreationbuilderError
    };
};