import { useDispatch, useSelector } from "react-redux";
import Helper from "../../utils/Helper";
import { useFormik } from "formik";
import ProfileForm from "./ProfileForm";
import { updateProfile } from "../../redux/auth/authSlice";

function Profile({ onClose }) {
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state) => state.auth);

    const formik = useFormik({
        initialValues: {
            name: user?.name || "",
            email: user?.email || "",
            role: user?.role || "",
            image_url: user?.image_url || "",
            blocked: user?.blocked || false,
        },
        enableReinitialize: true,
        onSubmit: async (values, { setSubmitting }) => {
            console.log("Dữ liệu gửi lên API:", values);

            try {
                await dispatch(updateProfile({user: values})).unwrap();
                Helper.toastSuccess("Cập nhật thành công!");
                onClose();
            } catch (error) {
                Helper.toastError(error?.message || "Lỗi khi cập nhật!");
            }
            setSubmitting(false);
        },
    });

    return (
        <div>
            <ProfileForm formik={formik} onClose={onClose} loading={loading} />
        </div>
    );
}

export default Profile;
