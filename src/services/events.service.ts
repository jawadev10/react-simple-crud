import axios from "axios";
import {Event} from "../models/Event";

export const BASE_URL = 'http://localhost:3001'

export const eventsApi = {
    getEvents: async () => {
       const { data } = await axios.get(`${BASE_URL}/events`);
       return data as Event[];
    }
};