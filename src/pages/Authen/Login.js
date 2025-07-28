import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import Helper from "../../utils/Helper";
import FormLogin from "../../components/Auth/FormLogin";
import {loginUser} from "../../redux/auth/authSlice";
import {updateGeneralInfo} from "../../redux/generalInfo/generalInfoSlice";
import {IoIosArrowRoundBack,IoIosArrowForward} from "react-icons/io";
import { SlEarphonesAlt } from "react-icons/sl";

const validationSchema = Yup.object({
    email: Yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
    password: Yup.string().min(6, "Mật khẩu ít nhất 6 ký tự").required("Vui lòng nhập mật khẩu"),
});

function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async (values, {setSubmitting}) => {
        setLoading(true);
        try {
            const result = await dispatch(loginUser(values));
            if (result.meta.requestStatus === "fulfilled") {
                Helper.toastSuccess("Đăng nhập thành công!");

                const pendingTemplateCode = localStorage.getItem("pendingTemplateCode");
                if (pendingTemplateCode) {
                    try {
                        await dispatch(updateGeneralInfo({template_code: pendingTemplateCode})).unwrap();
                        localStorage.removeItem("pendingTemplateCode");
                        Helper.toastSuccess("Đã áp dụng mẫu cưới thành công!");
                    } catch (err) {
                        console.error("Lỗi khi update template sau login:", err);
                        Helper.toastError("Đã đăng nhập nhưng lỗi áp dụng mẫu, vui lòng thử lại!");
                    }
                }

                navigate("/wedding/general-info");
            } else {
                Helper.toastError(result.payload);
            }
        } catch (err) {
            Helper.toastError(err.message || "Đã xảy ra lỗi khi đăng nhập");
        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    };

    const formik = useFormik({
        initialValues: {email: "", password: ""},
        validationSchema,
        onSubmit: handleSubmit,
    });

    const DoubleHappinessIcon = ({className}) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="double-happiness" className={className}>
            <path fill="#fde047"
                  d="M5 11h22a1 1 0 0 0 0-2h-5V8h3a1 1 0 0 0 0-2h-3V4a1 1 0 0 0-2 0v2h-8V4a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2h3v1H5a1 1 0 0 0 0 2zm7-3h8v1h-8V8zm17.625 4.771a1 1 0 0 0-.973-.771H18a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2v2h-8v-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H3.348a1 1 0 0 0-.973.771 14.053 14.053 0 0 0-.334 4.306 1 1 0 0 0 .997.923H10v2H4a1 1 0 0 0 0 2h6v2H6.619a1 1 0 0 0-.722 1.692 14.052 14.052 0 0 0 7.95 4.143.999.999 0 0 0 1.153-.988V25a1 1 0 0 0-1-1h-2v-2h8v2h-2a.997.997 0 0 0-1 1v3.847a.998.998 0 0 0 1.152.988 14.056 14.056 0 0 0 7.95-4.143A1 1 0 0 0 25.38 24H22v-2h6a1 1 0 0 0 0-2h-6v-2h6.962a1 1 0 0 0 .997-.923 14.053 14.053 0 0 0-.334-4.306zM13 26v1.621A12.065 12.065 0 0 1 9.37 26H13zM4 16c0-.671.056-1.341.166-2H13v2H4zm18.63 10A12.065 12.065 0 0 1 19 27.621V26h3.63zM19 16v-2h8.834c.11.659.166 1.329.166 2h-9z"></path>
        </svg>
    );

    return (
        <div className="relative flex overflow-hidden h-screen items-center justify-center bg-red-900 px-4">
            <DoubleHappinessIcon className="w-12 absolute left-24 -top-3 md:left-auto md:top-auto md:right-56 md:bottom-16 opacity-75"/>
            <DoubleHappinessIcon className="w-6 absolute left-10 top-32 md:left-auto md:top-auto md:right-48 md:bottom-6 opacity-70"/>
            <DoubleHappinessIcon className="w-8 absolute right-12 top-12 md:left-auto md:top-auto md:right-32 md:bottom-5 opacity-80"/>
            <DoubleHappinessIcon className="w-10 absolute right-32 bottom-36 md:right-24 md:bottom-16 opacity-70"/>
            <DoubleHappinessIcon className="w-[130px] md:w-[150px] absolute right-10 top-48 md:top-56 opacity-50"/>
            <DoubleHappinessIcon className="w-32 absolute -left-12 bottom-40 opacity-50"/>
            <DoubleHappinessIcon className="w-28 absolute left-28 -bottom-6 opacity-30 md:opacity-50"/>
            <DoubleHappinessIcon className="w-16 absolute left-[400px] bottom-24 md:left-80 md:-bottom-3 opacity-50"/>
            <Link to={"/"} className="absolute top-6 md:top-14 left-4 md:left-8 flex items-center gap-1 text-white">
                <IoIosArrowRoundBack size={28}/>
                <p className="text-sm md:text-base">Quay lại trang chủ</p>
            </Link>
            <img src="/images/Lovelyinvites-1.png" alt=""
                 className="absolute w-64 md:w-72 top-36 md:top-20 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
            <button className="flex bg-white/30 text-yellow-300 absolute bottom-20 xs:bottom-10 xl:bottom-auto xl:top-12 xl:right-8 px-3 py-3 items-center rounded-md">
                <SlEarphonesAlt size={18}/>
                <div className="mx-3 leading-[0px] text-left">
                    <p className="text-sm">Cần giúp đỡ ?</p>
                    <span className="text-xs">Lovelyinvites luôn sẵn sàng hỗ trợ bạn.</span>
                </div>
                <IoIosArrowForward size={18}/>
            </button>
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-4 sm:p-6 z-50 mx-2 sm:mx-0">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col space-y-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-playfair">
                            Lovelyinvites xin chào
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600">
                            Vui lòng đăng nhập để tiếp tục
                        </p>
                    </div>
                    <img src="/images/logo-3.png" alt="Logo" className="h-16 sm:h-20 w-auto"/>
                </div>
                <FormLogin formik={formik} loading={loading}/>
            </div>
        </div>
    );
}

export default Login;
