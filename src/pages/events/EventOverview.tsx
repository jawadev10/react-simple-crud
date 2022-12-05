import React from "react";
import {useEvents} from "../../hooks/useEvents";

const EventOverview: React.FC = (props): React.ReactElement => {
    const {eventsLoading, events} = useEvents();



    return (
        <>
            Bonjour , bienvenue dans cette overview
            {eventsLoading && <p>it's loading ...</p>}


            {!eventsLoading && events.map((element: any) => <p>{element.title}</p>)}

        </>
    );
}

export default EventOverview;
