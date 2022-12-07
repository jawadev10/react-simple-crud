import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {eventsApi} from "../services/events.service";
import {toast} from "react-toastify";
import {useState} from "react";

export const usePostEvent = () => {
    const [isEventCreated, setEventCreated] = useState<boolean>(false);
    const { mutate: postEvent, isLoading: loadingPostEvent } =  useMutation(eventsApi.postEvent, {
        onSuccess: (data) => {
            console.log(data.title)
            toast.success(`🚀 ${data.title} event has been created`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setEventCreated(true);
        },
        onError: () => {
            toast.error('😞 A problem occured when saving your event', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setEventCreated(false);
        },
    });

    return {
        postEvent,
        loadingPostEvent,
        isEventCreated
    }

};