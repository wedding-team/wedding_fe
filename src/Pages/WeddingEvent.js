import {useEffect, useMemo, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import WeddingEventHeader from "../Component/WeddingEvent/WeddingEventHeader";
import WeddingEventList from "../Component/WeddingEvent/WeddingEventList";
import ModalForm from "../Component/common/ModalForm";
import WeddingEventForm from "../Component/WeddingEvent/WeddingEventForm";
import * as Yup from "yup";
import { useFormik } from "formik";
import {fetchWeddingEvents, saveWeddingEvent} from "../Redux/weddingEvent/weddingEventSlice";
import Helper from "../Utils/Helper";

const getCurrentDate = () => new Date().toISOString().split("T")[0];
const getCurrentTime = () => new Date().toTimeString().slice(0, 5);

const validationSchema = Yup.object({
    title: Yup.string().required("Vui lòng nhập tên sự kiện"),
    address: Yup.string().required("Vui lòng nhập địa chỉ"),
    event_date: Yup.date()
        .required("Vui lòng chọn ngày tổ chức")
        .min(new Date().toISOString().split("T")[0], "Ngày tổ chức không được ở quá khứ"),
    event_time: Yup.string().required("Vui lòng chọn giờ tổ chức"),
    image: Yup.mixed(),
});

function WeddingEvent() {
    const dispatch = useDispatch();
    const { events, loading } = useSelector((state) => state.weddingEvents);

    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        dispatch(fetchWeddingEvents());
    }, [dispatch]);

    const openFormModal = (event = null) => {
        setSelectedEvent(event);
        setIsFormModalOpen(true);
    };

    const closeFormModal = () => {
        setIsFormModalOpen(false);
        setSelectedEvent(null);
        formik.resetForm();
    };

    const initialValues = useMemo(() => ({
        title: selectedEvent?.title || "",
        address: selectedEvent?.address || "",
        event_date: selectedEvent?.event_date || getCurrentDate(),
        event_time: selectedEvent?.event_time || getCurrentTime(),
        image_url: selectedEvent?.image_url || null,
    }), [selectedEvent]);

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await dispatch(saveWeddingEvent({ id: selectedEvent?.id, data: values }));
                Helper.toastSuccess(selectedEvent ? "Cập nhật sự kiện thành công!" : "Thêm sự kiện thành công!");
            } catch (error) {
                Helper.toastError("Lỗi khi lưu sự kiện!");
            }
            setSubmitting(false);
        }
    });

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <WeddingEventHeader onAdd={() => openFormModal()} />
            {loading ? (
                <p>Đang tải...</p>
            ) : (
                <WeddingEventList events={events} onEdit={openFormModal} />
            )}
            <ModalForm
                isOpen={isFormModalOpen}
                onClose={closeFormModal}
                title={selectedEvent ? "Cập nhật sự kiện" : "Thêm sự kiện mới"}
            >
                <form onSubmit={formik.handleSubmit}>
                    <WeddingEventForm formik={formik} />
                    <div className="flex justify-end mt-4">
                        <button
                            type="button"
                            onClick={closeFormModal}
                            className="mr-3 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                            disabled={formik.isSubmitting}
                        >
                            {formik.isSubmitting ? "Đang lưu..." : "Lưu"}
                        </button>
                    </div>
                </form>
            </ModalForm>
        </div>
    );
}

export default WeddingEvent;
