import React, {Fragment, useState} from "react";
import {useEvents} from "../../hooks/useEvents";
import {useEventCreationBuilder} from "../../hooks/useEventCreationBuilder";
import {Button, Form, Modal, Spin, Table} from "antd";
import {useEventsDataSource} from "../../hooks/useEventsDataSource";
import {useEventsColumns} from "../../hooks/useEventsColumns";
import {Element} from "../../components/Element";
import {useForm} from "antd/es/form/Form";
import moment from "moment";
import {eventsApi} from "../../services/events.service";
import {toast, ToastContainer} from "react-toastify";
import {Event} from "../../models/Event";
import Search from "antd/es/input/Search";


const EventOverview: React.FC = (): React.ReactElement => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [isSaveBtnDisabled, setSaveBtnDisabled] = useState<boolean>(true);
    const [isLoadingPostEvent, setIsLoadingPostEvent] = useState<boolean>(false);

    const {eventsLoading} = useEvents();

    const {eventsCreationBuilderLoading, eventsCreationbuilder} = useEventCreationBuilder();
    const {dataSource} = useEventsDataSource();
    const {columns} = useEventsColumns();

    const [dataSourceFiltered, setDataSourceFiltered] =  useState<Event[]>([]);

    const [form] = useForm();

    const postEvent = (eventPayload: Event): void => {
        eventsApi.postEvent(eventPayload).then((event) => {
            setIsLoadingPostEvent(false);
            toast.success(`🚀 ${event.title} event has been created, wait 10 seconds it will appear in the table`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            form.resetFields();
            setIsModalVisible(false);
            setSaveBtnDisabled(true);
        }).catch(((error) => {
            toast.error(`😞 ${error}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }));
    }

    const handleSubmit = (values: any): void => {
        setIsLoadingPostEvent(true);
        form
            .validateFields()
            .then(() => {
                const formatDate = "YYYY-MM-DD";
                const startDate = moment(values.startDate.endDate[0].toString()).format(formatDate);
                const endDate = moment(values.startDate.endDate[1].toString()).format(formatDate);

                delete values.startDate;

                const eventPayload = {
                    id: Math.floor(Math.random() * 10000),
                    startDate,
                    endDate,
                    ...values
                }
                postEvent(eventPayload);

            })
            .catch(() => {
                //errors in the fields
                setIsLoadingPostEvent(false);
            });
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = (): void => {
        setIsModalVisible(false);
        form.resetFields();
        setSaveBtnDisabled(true);
    };

    const handleValidation = (): void => {
        form
            .validateFields()
            .catch((errors) => {
                errors.errorFields.length > 0 ? setSaveBtnDisabled(true) : setSaveBtnDisabled(false);
            });
    };

    const onSearch = (value: string): void => {
        const dataSourceFiltered = dataSource?.filter((event) => {
            if(value.length > 0) {
                return event.title === value || event.description === value ? event : null
            }
        });
        setDataSourceFiltered(dataSourceFiltered as Event[]);
    }

    return (
        <Fragment>

            <h4 className='d-flex justify-content-center mt-4'>Welcome to this overview component!</h4>


            <div className='mt-4 d-flex justify-content-center'>
                <Button onClick={showModal}>
                    Create an event
                </Button>
            </div>

            <ToastContainer/>

            <Modal
                title="CREATE EVENT"
                open={isModalVisible}
                onCancel={handleCancel}
                confirmLoading={isLoadingPostEvent}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        loading={isLoadingPostEvent}
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

                    {
                        isSaveBtnDisabled &&
                        <p className='d-flex justify-content-center text-danger'>Please fill all the required fields</p>
                    }
                </Form>

                }
            </Modal>

            <div className='d-flex justify-content-center mx-auto mt-3 w-50'>
                <Search
                    placeholder="Search by title or description"
                    onSearch={onSearch}
                />
            </div>

            <div className='mt-5 d-flex justify-content-center text-center'>
                {
                    (eventsLoading || eventsCreationBuilderLoading) &&
                    <Spin tip="Loading" size="large"/>
                }

                {!eventsLoading && !eventsCreationBuilderLoading &&
                <Table
                    className="w-75"
                    dataSource={dataSourceFiltered && dataSourceFiltered.length > 0 ? dataSourceFiltered: dataSource}
                    columns={columns}
                />
                }
            </div>
        </Fragment>

    );
}

export default EventOverview;
