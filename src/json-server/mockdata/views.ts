import {ViewDto} from "../api-model";

const views: ViewDto[] = [
    {
        name: "title",
        label: "Title",
        component: "text",
        required: true
    },
    {
        name: "type",
        component: "select",
        label: "Type",
        options: [
            {
                "label": "Generic",
                "value": "generic"
            },
            {
                "label": "Holiday",
                "value": "holiday"
            }
        ]
    },
    {
        name: [
            "startDate",
            "endDate"
        ],
        component: "range_picker",
        label: "Date"
    },
    {
        name: "description",
        label: "Description",
        component: "textarea"
    }
]

export default views;