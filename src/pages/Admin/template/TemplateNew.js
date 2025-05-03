import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { useFormik } from "formik";
import Helper from "../../../utils/Helper";
import TemplateForm from "./TemplateForm";
import { saveTemplate } from "../../../redux/template/templateSlice";

const validationSchema = Yup.object({
    code: Yup.string().required("Vui lòng nhập mã thiệp"),
    title: Yup.string().required("Vui lòng nhập tên thiệp"),
    description: Yup.string().required("Vui lòng nhập mô tả"),
    image: Yup.mixed(),
    category_id: Yup.number().required("Vui lòng chọn danh mục"),
});

function TemplateNew({ template, onClose, isEdit, categories }) {
    const dispatch = useDispatch();

    const initialValues = useMemo(() => ({
        code: template?.code || "",
        title: template?.title || "",
        description: template?.description || "",
        template_type: template?.template_type || 0,
        is_active: template?.is_active || false,
        image_url: template?.image_url || "",
        category_id: template?.category_id || "",
    }), [template]);

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await dispatch(saveTemplate({ id: template?.id, data: values }));
                Helper.toastSuccess(template ? "Cập nhật thiệp cưới thành công!" : "Thêm thiệp cưới thành công!");
                onClose();
            } catch (error) {
                Helper.toastError("Lỗi khi lưu thiệp cưới!");
            }
            setSubmitting(false);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TemplateForm formik={formik} isEdit={isEdit} categories={categories} />
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

export default TemplateNew;
