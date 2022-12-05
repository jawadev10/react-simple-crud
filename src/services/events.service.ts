import axios from "axios";

export const BASE_URL = 'http://localhost:3001'

export const eventsApi = {
    getEvents: async () => {
       const { data } = await axios.get(`${BASE_URL}/events`);
       return data;
    }
};