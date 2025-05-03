import * as Yup from "yup";
import {useFormik} from "formik";
import Helper from "../../utils/Helper";
import LoveStoryForm from "./LoveStoryForm";
import {useMemo} from "react";
import {useDispatch} from "react-redux";
import {saveLoveStory} from "../../redux/loveStory/loveStorySlice";

const validationSchema = Yup.object({
    title: Yup.string().required("Vui lòng nhập tiêu đề"),
    description: Yup.string().required("Vui lòng nhập câu chuyện"),
    love_story_date: Yup.date().required("Vui lòng chọn ngày kỷ niệm"),
    image: Yup.mixed()
});

function LoverStoryNew({loveStory, onClose}) {
    const dispatch = useDispatch();

    const initialValues = useMemo(() => ({
        title: loveStory?.title || "",
        description: loveStory?.description || "",
        love_story_date: loveStory?.love_story_date || Helper.getCurrentDate(),
        image_url: loveStory?.image_url || "",
    }), [loveStory]);

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema,
        onSubmit: async (values, {setSubmitting}) => {
            try {
                await dispatch(saveLoveStory({id: loveStory?.id, data: values}));
                Helper.toastSuccess(loveStory ? "Cập nhật thành công!" : "Thêm mới thành công!");
                onClose();
            } catch (error) {
                Helper.toastError("Lỗi khi lưu!");
            }
            setSubmitting(false);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <LoveStoryForm formik={formik}/>
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={onClose}
                    className="mr-3 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                    Hủy
                </button>
                <button
                    type="submit"
                    className="px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                    disabled={formik.isSubmitting}
                >
                    {formik.isSubmitting ? "Đang lưu..." : "Lưu"}
                </button>
            </div>
        </form>
    )
}

export default LoverStoryNew;