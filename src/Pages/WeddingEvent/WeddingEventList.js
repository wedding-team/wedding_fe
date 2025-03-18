import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import WeddingEventItem from "./WeddingEventItem";
import WeddingEventDelete from "./WeddingEventDelete";
import {fetchWeddingEvents} from "../../redux/weddingEvent/weddingEventSlice";

function WeddingEventList({onEdit}) {
    const dispatch = useDispatch();
    const {events} = useSelector((state) => state.weddingEvents);

    useEffect(() => {
        dispatch(fetchWeddingEvents());
    }, [dispatch]);

    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openDeleteModal = (event) => {
        setSelectedEvent(event);
        setIsDeleteModalOpen(true);
    };

    return (
        <div className="mt-4">
            {events.length > 0 ? (
                <ul className="space-y-4">
                    {events.map((event) => (
                        <WeddingEventItem key={event.id} event={event} onDelete={openDeleteModal} onEdit={onEdit}/>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">Không có sự kiện nào.</p>
            )}
            <WeddingEventDelete isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}
                                event={selectedEvent}/>
        </div>
    );
}

export default WeddingEventList;