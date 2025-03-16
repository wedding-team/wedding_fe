import React, {useEffect, useState, useCallback} from "react";
import WeddingInvitationForm from "./WeddingInvitationForm";
import {useFormik} from "formik";
import Helper from "../../utils/Helper";
import * as Yup from "yup";
import WeddingInvitationApi from "../../apis/WeddingInvitationApi";

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
    const [initialValues, setInitialValues] = useState(null);

    const fetchWeddingData = useCallback(async () => {
        try {
            const res = await WeddingInvitationApi.getWeddingInvitation();
            const data = res.data?.body;
            setInitialValues({
                groom_name: data.groom_name || "",
                groom_address: data.groom_address || "",
                groom_dad: data.groom_dad || "",
                groom_mom: data.groom_mom || "",
                groom_bio: data.groom_bio || "",
                bride_name: data.bride_name || "",
                bride_address: data.bride_address || "",
                bride_dad: data.bride_dad || "",
                bride_mom: data.bride_mom || "",
                bride_bio: data.bride_bio || "",
                groom_avatar_url: data.groom_avatar_url || null,
                bride_avatar_url: data.bride_avatar_url || null,
                groom_qr_url: data.groom_qr_url || null,
                bride_qr_url: data.bride_qr_url || null,
            });
        } catch (error) {
            Helper.toastError("Không thể tải dữ liệu!");
        }
    }, []);

    useEffect(() => {
        fetchWeddingData();
    }, [fetchWeddingData]);

    const formik = useFormik({
        initialValues: initialValues || {
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
        onSubmit: async (values, {setSubmitting}) => {
            try {
                await WeddingInvitationApi.updateWeddingInvitation(values);
                Helper.toastSuccess("Cập nhật thành công!");
                fetchWeddingData();
            } catch (err) {
                console.error("Lỗi cập nhật:", err);
                Helper.toastError(err.response?.data?.message || "Cập nhật thất bại");
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (<>{initialValues ? <WeddingInvitationForm formik={formik}/> : <p>Đang tải...</p>}</>);
};

export default WeddingInvitation;
