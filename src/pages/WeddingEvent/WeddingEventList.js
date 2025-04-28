import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeddingEvents } from "../../redux/weddingEvent/weddingEventSlice";
import WeddingEventItem from "./WeddingEventItem";
import WeddingEventDelete from "./WeddingEventDelete";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import WeddingEventApi from "../../apis/WeddingEventApi";

function WeddingEventList({ onEdit }) {
    const dispatch = useDispatch();
    const { events } = useSelector((state) => state.weddingEvents);
    const [eventList, setEventList] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchWeddingEvents());
    }, [dispatch]);

    useEffect(() => {
        setEventList(events);
    }, [events]);

    const openDeleteModal = (event) => {
        setSelectedEvent(event);
        setIsDeleteModalOpen(true);
    };

    const handleDragEnd = async (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const oldIndex = eventList.findIndex((e) => e.id === active.id);
        const newIndex = eventList.findIndex((e) => e.id === over.id);
        const newEvents = arrayMove(eventList, oldIndex, newIndex);
        setEventList(newEvents);

        setTimeout(async () => {
            try {
                await WeddingEventApi.updatePosition(active.id, { position: newIndex + 1 });
            } catch (error) {
                console.error("Lỗi cập nhật position:", error);
            }
        }, 300);
    };

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={eventList.map((e) => e.id)}>
                <div className="grid grid-cols-1 place-items-center px-1 pb-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    {eventList.length > 0 ? (
                        eventList.map((event) => (
                            <WeddingEventItem key={event.id} event={event} onDelete={openDeleteModal} onEdit={onEdit} />
                        ))
                    ) : (
                        <p className="text-gray-500 col-span-full">Chưa có sự kiện nào.</p>
                    )}
                </div>
                <WeddingEventDelete isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} event={selectedEvent} />
            </SortableContext>
        </DndContext>
    );
}

export default WeddingEventList;
