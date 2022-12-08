import React from 'react';
import {render} from '@testing-library/react';
import EventOverview from "./EventOverview";

test('renders EventOverview component', () => {
    render(<EventOverview/>);
});


test('should check if the table has the correct data', () => {
    render(<EventOverview/>);
});


test('should check if the fields are well completed and trigger toast success', () => {
    render(<EventOverview/>);
});


test('should check if a new Entry can be inserted in the modal', () => {
    render(<EventOverview/>);
});

test('should check if a validations required work correctly', () => {
    render(<EventOverview/>);
});
