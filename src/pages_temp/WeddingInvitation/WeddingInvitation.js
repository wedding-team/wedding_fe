import React, { useEffect } from "react";
import WeddingInvitationForm from "./WeddingInvitationForm";
import { useFormik } from "formik";
import Helper from "../../utils/Helper";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {fetchWeddingInvitations, updateWeddingInvitation} from "../../redux/weddingInvitation/weddingInvitationSlice";

const validationSchema = Yup.object({
    groom_name: Yup.string().required("Vui lòng nhập tên chú rể"),
    bride_name: Yup.string().required("Vui lòng nhập tên cô dâu"),
    groom_address: Yup.string().required("Vui lòng nhập địa chỉ chú rể"),
    bride_address: Yup.string().required("Vui lòng nhập địa chỉ cô dâu"),
    groom_dad: Yup.string().required("Vui lòng nhập tên bố chú rể"),
    groom_mom: Yup.string().required("Vui lòng nhập tên mẹ chú rể"),
    bride_dad: Yup.string().required("Vui lòng nhập tên bố cô dâu"),
    bride_mom: Yup.string().required("Vui lòng nhập tên mẹ cô dâu"),
    groom_bio: Yup.string(),
    bride_bio: Yup.string(),
    groom_avatar_url: Yup.mixed().nullable(),
    bride_avatar_url: Yup.mixed().nullable(),
    groom_qr_url: Yup.mixed().nullable(),
    bride_qr_url: Yup.mixed().nullable(),
});

const WeddingInvitation = () => {
    const dispatch = useDispatch();
    const { weddingInvitation, status } = useSelector((state) => state.weddingInvitations);

    useEffect(() => {
        dispatch(fetchWeddingInvitations());
    }, [dispatch]);

    const formik = useFormik({
        initialValues: weddingInvitation || {
            groom_name: "",
            groom_address: "",
            groom_dad: "",
            groom_mom: "",
            groom_bio: "",
            bride_name: "",
            bride_address: "",
            bride_dad: "",
            bride_mom: "",
            bride_bio: "",
            groom_avatar_url: null,
            bride_avatar_url: null,
            groom_qr_url: null,
            bride_qr_url: null,
        },
        enableReinitialize: true,
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await dispatch(updateWeddingInvitation(values)).unwrap();
                Helper.toastSuccess("Cập nhật thành công!");
            } catch (err) {
                console.error("Lỗi cập nhật:", err);
                Helper.toastError(err.message || "Cập nhật thất bại");
            } finally {
                setSubmitting(false);
            }
        },
    });

    if (status === "loading") return <p>Đang tải...</p>;

    return <WeddingInvitationForm formik={formik} />;
};

export default WeddingInvitation;
