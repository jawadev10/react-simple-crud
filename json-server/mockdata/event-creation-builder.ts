import {EventCreationBuilderDto} from "../api-model";

const eventCreationBuilder: EventCreationBuilderDto[] = [
    {
        name: "title",
        label: "Title",
        component: "text",
        required: true
    },
    {
        name: "type",
        component: "select",
        required: true,
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
        label: "Date",
        required: true
    },
    {
        name: "description",
        label: "Description",
        component: "textarea"
    }
];

export default eventCreationBuilder;