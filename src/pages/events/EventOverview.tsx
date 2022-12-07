import React, {Fragment, useCallback, useState} from "react";
import {useEvents} from "../../hooks/useEvents";
import {useEventCreationBuilder} from "../../hooks/useEventCreationBuilder";
import {Button, Form, Modal, Spin, Table} from "antd";
import {useEventsDataSource} from "../../hooks/useEventsDataSource";
import {useEventsColumns} from "../../hooks/useEventsColumns";
import {Element} from "../../components/Element";
import {useForm} from "antd/es/form/Form";
import moment from "moment";
import {usePostEvent} from "../../hooks/usePostEvent";


const EventOverview: React.FC = (): React.ReactElement => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [isSaveBtnDisabled, setSaveBtnDisabled] = useState<boolean>(true);

    const {eventsLoading} = useEvents();
    const {postEvent, loadingPostEvent, isEventCreated} = usePostEvent();

    const {eventsCreationBuilderLoading, eventsCreationbuilder} = useEventCreationBuilder();
    const {dataSource} = useEventsDataSource();
    const {columns} = useEventsColumns();


    const [form] = useForm();

    const handleSubmit = useCallback(async (values: any) => {
        form
            .validateFields()
            .then(() => {
                const formatDate = "YYYY-MM-DD";
                const startDate = moment(values.startDate.endDate[0].toString()).format(formatDate);
                const endDate = moment(values.startDate.endDate[1].toString()).format(formatDate);

                delete values.startDate;

                const eventPayload = {
                    startDate,
                    endDate,
                    ...values
                }

                postEvent(eventPayload);

                if(isEventCreated) {
                    form.resetFields();
                    setIsModalVisible(false);
                    setSaveBtnDisabled(true);
                }
            })
            .catch((errors) => {
                // Errors in the fields
                console.log(errors)
            });
    }, [form]);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
        setSaveBtnDisabled(true);
    };

    const handleValidation = () => {
        form
            .validateFields()
            .catch((errors) => {
                errors.errorFields.length > 0 ? setSaveBtnDisabled(true) : setSaveBtnDisabled(false);
            });
    };

    return (
        <Fragment>

            <h4 className='d-flex justify-content-center mt-4'>Welcome to this overview component!</h4>


            <div className='mt-4 d-flex justify-content-center'>
                <Button onClick={showModal}>
                    Create an event
                </Button>
            </div>


            <Modal
                title="CREATE EVENT"
                open={isModalVisible}
                onCancel={handleCancel}
                confirmLoading={loadingPostEvent}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        loading={loadingPostEvent}
                        onClick={form.submit}
                        disabled={isSaveBtnDisabled}
                    >
                        Save
                    </Button>
                ]}
            >
                {!eventsCreationBuilderLoading &&
                <Form
                    className="mt-4"
                    form={form}
                    onFinish={handleSubmit}
                    onValuesChange={handleValidation}
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
                </Form>
                }
            </Modal>


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
        </Fragment>

    );
}

export default EventOverview;
