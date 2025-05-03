import React, { useEffect } from "react";
import CoupleForm from "./CoupleForm";
import { useFormik } from "formik";
import Helper from "../../utils/Helper";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchCouples, updateCouple } from "../../redux/couple/coupleSlice";

const validationSchema = Yup.object({
    groom_name: Yup.string().required("Vui lòng nhập tên chú rể"),
    groom_address: Yup.string().required("Vui lòng nhập địa chỉ chú rể"),
    groom_dad: Yup.string().required("Vui lòng nhập tên bố chú rể"),
    groom_mom: Yup.string().required("Vui lòng nhập tên mẹ chú rể"),
    groom_bio: Yup.string().required("Vui lòng nhập thông tin về chú rể"),
    groom_bank_name: Yup.string().required("Vui lòng chọn tên ngân hàng của chú rể"),
    groom_account_number: Yup.string().required("Vui lòng nhập số tài khoản của chú rể"),
    groom_account_name: Yup.string().required("Vui lòng nhập tên tài khoản của chú rể"),
    groom_avatar_url: Yup.mixed().nullable(),
    groom_qr_url: Yup.mixed().nullable(),

    bride_name: Yup.string().required("Vui lòng nhập tên cô dâu"),
    bride_address: Yup.string().required("Vui lòng nhập địa chỉ cô dâu"),
    bride_dad: Yup.string().required("Vui lòng nhập tên bố cô dâu"),
    bride_mom: Yup.string().required("Vui lòng nhập tên mẹ cô dâu"),
    bride_bio: Yup.string().required("Vui lòng nhập thông tin về cô dâu"),
    bride_bank_name: Yup.string().required("Vui lòng chọn tên ngân hàng của cô dâu"),
    bride_account_number: Yup.string().required("Vui lòng nhập số tài khoản của cô dâu"),
    bride_account_name: Yup.string().required("Vui lòng nhập tên tài khoản của cô dâu"),
    bride_avatar_url: Yup.mixed().nullable(),
    bride_qr_url: Yup.mixed().nullable()
});


const Couple = () => {
    const dispatch = useDispatch();
    const { couple, status } = useSelector((state) => state.couples);

    useEffect(() => {
        dispatch(fetchCouples());
    }, [dispatch]);

    const formik = useFormik({
        initialValues: couple || {
            groom_name: "",
            groom_address: "",
            groom_dad: "",
            groom_mom: "",
            groom_bio: "",
            groom_bank_name: "",
            groom_account_number: "",
            groom_account_name: "",
            groom_avatar_url: null,
            groom_qr_url: null,
            bride_name: "",
            bride_address: "",
            bride_dad: "",
            bride_mom: "",
            bride_bio: "",
            bride_bank_name: "",
            bride_account_number: "",
            bride_account_name: "",
            bride_avatar_url: null,
            bride_qr_url: null,
        },
        enableReinitialize: true,
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await dispatch(updateCouple(values)).unwrap();
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

    return <CoupleForm formik={formik} />;
};

export default Couple;
