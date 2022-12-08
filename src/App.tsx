import React from 'react';
import './App.css';
import EventOverview from "./pages/events/EventOverview";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();


const App: React.FC = (): React.ReactElement => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <EventOverview/>
            </QueryClientProvider>
        </>
    );
}

export default App;
