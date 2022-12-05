import React, {Fragment} from "react";
import {useEvents} from "../../hooks/useEvents";
import {useEventCreationBuilder} from "../../hooks/useEventCreationBuilder";
import {Spin, Table} from "antd";
import {useEventsDataSource} from "../../hooks/useEventsDataSource";
import {useEventsColumns} from "../../hooks/useEventsColumns";

const EventOverview: React.FC = (): React.ReactElement => {
    const {eventsLoading} = useEvents();
    const {eventsCreationBuilderLoading} = useEventCreationBuilder();
    const {dataSource} = useEventsDataSource();
    const {columns} = useEventsColumns();


    return (
        <Fragment>

            <h4 className='d-flex justify-content-center mt-4'>Welcome to this overview component!</h4>


            <div className='mt-5 d-flex justify-content-center text-center'>
                {
                    (eventsLoading || eventsCreationBuilderLoading) &&
                    <Spin tip="Loading" size="large" />
                }

                {!eventsLoading && !eventsCreationBuilderLoading &&
                <Table
                    className="w-75"
                    dataSource={dataSource}
                    columns={columns}
                />
                }
            </div>


        </Fragment>

    );
}

export default EventOverview;
