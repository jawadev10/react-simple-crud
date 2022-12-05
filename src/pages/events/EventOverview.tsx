import React, {Fragment} from "react";
import {useEvents} from "../../hooks/useEvents";
import {useEventCreationBuilder} from "../../hooks/useEventCreationBuilder";
import {Button, Form, Spin, Table} from "antd";
import {useEventsDataSource} from "../../hooks/useEventsDataSource";
import {useEventsColumns} from "../../hooks/useEventsColumns";
import {Element} from "../../components/Element";

const EventOverview: React.FC = (): React.ReactElement => {
    const {eventsLoading} = useEvents();
    const {eventsCreationBuilderLoading, eventsCreationbuilder} = useEventCreationBuilder();
    const {dataSource} = useEventsDataSource();
    const {columns} = useEventsColumns();


    const onFinish = (values: any) => {
        console.log('Success' + JSON.stringify(values));
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Fragment>

            <h4 className='d-flex justify-content-center mt-4'>Welcome to this overview component!</h4>

            <div className='mt-5 d-flex justify-content-center text-center'>
                {
                    (eventsLoading || eventsCreationBuilderLoading) &&
                    <Spin tip="Loading" size="large"/>
                }

                {!eventsLoading && !eventsCreationBuilderLoading &&
                <Table
                    className="w-75"
                    dataSource={dataSource}
                    columns={columns}
                />
                }
            </div>


            <br/>

            {!eventsCreationBuilderLoading &&
            <Form
                className='w-50 mx-auto'
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {eventsCreationbuilder!.map((eventCreationBuilder, index) =>
                    <Element
                        key={index}
                        name={eventCreationBuilder.name}
                        label={eventCreationBuilder.label}
                        component={eventCreationBuilder.component}
                        required={eventCreationBuilder?.required}
                        options={eventCreationBuilder?.options}/>
                )}
                <Form.Item className='d-flex justify-content-center'>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
            }


        </Fragment>

    );
}

export default EventOverview;
