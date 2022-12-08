import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import EventOverview from "./EventOverview";

test('renders EventOverview component with title', () => {
    render(<EventOverview/>);
    const title = screen.getByTestId('event-title-h4');
    expect(title.textContent).toBe('Welcome to this overview component!');
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
