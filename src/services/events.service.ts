import axios from "axios";
import {Event} from "../models/Event";
import {EventCreationBuilder} from "../models/EventCreationBuilder";

export const BASE_URL = 'http://localhost:3001'

export const eventsApi = {
    getEvents: async () => {
        const {data} = await axios.get(`${BASE_URL}/events`);
        return data as Event[];
    },
    getEventsCreationBuilder: async () => {
        const {data} = await axios.get(`${BASE_URL}/eventCreationBuilder`);
        return data as EventCreationBuilder[];
    },
    postEvent: async (event: Event) => {
        const {data} = await axios.post(`${BASE_URL}/events`, event);
        return data as Event;
    }
};