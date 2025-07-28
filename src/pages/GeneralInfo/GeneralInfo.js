import {useEffect} from "react";
import {fetchGeneralInfos, updateGeneralInfo} from "../../redux/generalInfo/generalInfoSlice";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import Helper from "../../utils/Helper";
import GeneralInfoForm from "./GeneralInfoForm";

function GeneralInfo() {
    const dispatch = useDispatch();
    const { generalInfo } = useSelector((state) => state.generalInfos);

    useEffect(() => {
        dispatch(fetchGeneralInfos());
    },[dispatch]);

    const formik = useFormik({
        initialValues: generalInfo || {
            audio_url: "",
            template_url: "",
            effect: "",
            wedding_day: "",
            open_letter: "",
        },
        enableReinitialize: true,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await dispatch(updateGeneralInfo(values)).unwrap();
                Helper.toastSuccess("Lưu thành công!");
            } catch (err) {
                console.error("Lỗi:", err);
                Helper.toastError(err.message || "Lưu thất bại");
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-7xl mx-auto">
            <h2 className="max-md:text-xl md:text-3xl font-semibold mb-6">Thông tin chung</h2>
           <GeneralInfoForm formik={formik} />
        </div>
    );
}

export default GeneralInfo;