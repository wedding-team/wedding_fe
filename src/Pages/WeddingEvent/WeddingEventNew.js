import {useMemo} from "react";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";
import WeddingEventForm from "./WeddingEventForm";
import {saveWeddingEvent} from "../../redux/weddingEvent/weddingEventSlice";
import Helper from "../../utils/Helper";

const validationSchema = Yup.object({
    title: Yup.string().required("Vui lòng nhập tên sự kiện"),
    address: Yup.string().required("Vui lòng nhập địa chỉ"),
    event_date: Yup.date()
        .required("Vui lòng chọn ngày tổ chức")
        .min(new Date().toISOString().split("T")[0], "Ngày tổ chức không được ở quá khứ"),
    event_time: Yup.string().required("Vui lòng chọn giờ tổ chức"),
    image: Yup.mixed()
});

function WeddingEventNew({event, onClose}) {
    const dispatch = useDispatch();

    const initialValues = useMemo(() => ({
        title: event?.title || "",
        address: event?.address || "",
        event_date: event?.event_date || Helper.getCurrentDate(),
        event_time: event?.event_time || Helper.getCurrentTime(),
        image_url: event?.image_url || "",
    }), [event]);

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema,
        onSubmit: async (values, {setSubmitting}) => {
            try {
                await dispatch(saveWeddingEvent({id: event?.id, data: values}));
                console.log(values)
                Helper.toastSuccess(event ? "Cập nhật sự kiện thành công!" : "Thêm sự kiện thành công!");
                onClose();
            } catch (error) {
                Helper.toastError("Lỗi khi lưu sự kiện!");
            }
            setSubmitting(false);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <WeddingEventForm formik={formik}/>
            <div className="flex justify-end mt-4">
                <button
                    type="button"
                    onClick={onClose}
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
    );
}

export default WeddingEventNew;
