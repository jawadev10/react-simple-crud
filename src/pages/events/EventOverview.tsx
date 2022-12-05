import React, {useEffect, useState} from "react";
import {useEvents} from "../../hooks/useEvents";
import {useEventCreationBuilder} from "../../hooks/useEventCreationBuilder";
import {Table} from "antd";
import {EventColumnHeader} from "../../models/EventColumnHeader";
import {EventDataSource} from "../../models/EventDataSource";

const EventOverview: React.FC = (props): React.ReactElement => {
    const [columns, setColumns] = useState<EventColumnHeader[]>([]);
    const [dataSource, setDataSource] = useState<EventDataSource[]>([]);
    const {eventsLoading, events} = useEvents();
    const {eventsCreationBuilderLoading, eventsCreationbuilder} = useEventCreationBuilder();


    useEffect(() => {
        if(eventsCreationbuilder && events) {
            generateTableColumns();
            generateTableData();
        }
    }, [events, eventsCreationbuilder]);

    const generateTableColumns = () => {
            eventsCreationbuilder!.forEach((eventBuilder) => {
                if (eventBuilder.component === 'range_picker') {
                    [...eventBuilder.name].forEach((name: string) => {
                        const columnHeader: EventColumnHeader = {
                            key: name,
                            title: name,
                            dataIndex: name
                        };
                        setColumns((oldColumns) => [...oldColumns, columnHeader])
                    });
                } else {
                    const columnHeader: EventColumnHeader = {
                        key: eventBuilder.name as string,
                        title: eventBuilder.label,
                        dataIndex: eventBuilder.name as string
                    };
                    setColumns((oldColumns) => [...oldColumns, columnHeader])
                }
            });
    }

    const generateTableData = () => {
        if (events) {
            events.forEach((event) => {
                const mapEvent = {
                    ...event,
                    key: event.id
                };
                setDataSource((oldDataSource) => [...oldDataSource, mapEvent]);
            })
        }
    }


    return (
        <>

            <h3 className='d-flex justify-content-center mt-4'>Welcome to this overview component!</h3>


            {!eventsLoading && !eventsCreationBuilderLoading &&
            <Table
                className='mt-3 d-flex justify-content-center'
                dataSource={dataSource}
                columns={columns}
            />
            }


        </>

    );
}

export default EventOverview;
