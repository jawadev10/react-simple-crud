import {EventDto} from "../api-model";

const events: EventDto[] = [
    {
        id: "1",
        title: "Start of the year",
        type: "generic",
        startDate: "2022-01-01",
        endDate: "2022-12-01"
    },
    {
        id: "2",
        title: "Mediagenix holiday",
        type: "holiday",
        startDate: "2022-04-04"
    }
]

export default events;