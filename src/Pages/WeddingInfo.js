import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Heart, Save } from 'lucide-react';
import WeddingParty from '../Component/sections/WeddingParty';
import instance from "../Apis/instance";
import Helper from '../Utils/Helper';
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
    groom_name: Yup.string().required('Vui lòng nhập tên chú rể'),
    groom_address: Yup.string().required('Vui lòng nhập địa chỉ'),
    groom_dad: Yup.string().required('Vui lòng nhập họ tên bố'),
    groom_mom: Yup.string().required('Vui lòng nhập họ tên mẹ'),
    groom_bio: Yup.string().required('Vui lòng nhập tiểu sử chú rể'),
    bride_name: Yup.string().required('Vui lòng nhập tên cô dâu'),
    bride_address: Yup.string().required('Vui lòng nhập địa chỉ'),
    bride_dad: Yup.string().required('Vui lòng nhập họ tên bố'),
    bride_mom: Yup.string().required('Vui lòng nhập họ tên mẹ'),
    bride_bio: Yup.string().required('Vui lòng nhập tiểu sử cô dâu'),

    groom_qr: Yup.mixed().notRequired(),
    bride_qr: Yup.mixed().notRequired(),
});


const WeddingInfo = () => {
    const navigate = useNavigate();

    const [previewUrls, setPreviewUrls] = useState({
        groom_avatar_url: '',
        bride_avatar_url: '',
        groom_qr_url: '',
        bride_qr_url: '',
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWeddingInfo = async () => {
            try {
                setLoading(true);
                const response = await instance.get('/api/v1/wedding_invitation');

                if (response.data) {
                    const {
                        groom_name, groom_address, groom_dad, groom_mom, groom_bio,
                        bride_name, bride_address, bride_dad, bride_mom, bride_bio,
                        bride_avatar_url, groom_avatar_url, groom_qr_url, bride_qr_url,
                    } = response.data;

                    setPreviewUrls({
                        groom_avatar_url: groom_avatar_url || '',
                        bride_avatar_url: bride_avatar_url || '',
                        groom_qr_url: groom_qr_url || '',
                        bride_qr_url: bride_qr_url || '',
                    });

                    return {
                        groom_name: groom_name || '',
                        groom_address: groom_address || '',
                        groom_dad: groom_dad || '',
                        groom_mom: groom_mom || '',
                        groom_bio: groom_bio || '',
                        bride_name: bride_name || '',
                        bride_address: bride_address || '',
                        bride_dad: bride_dad || '',
                        bride_mom: bride_mom || '',
                        bride_bio: bride_bio || '',
                        groom_avatar: null,
                        bride_avatar: null,
                        groom_qr: null,
                        bride_qr: null,
                    };

                }
            } catch (err) {
                console.error('Error fetching wedding information:', err);
            } finally {
                setLoading(false);
            }
            return {};
        };

        fetchWeddingInfo().then(initialValues => {
            setFormikInitialValues(initialValues);
        });
    }, []);

    const [formikInitialValues, setFormikInitialValues] = useState({
        groom_name: '',
        groom_address: '',
        groom_dad: '',
        groom_mom: '',
        groom_bio: '',
        bride_name: '',
        bride_address: '',
        bride_dad: '',
        bride_mom: '',
        bride_bio: '',
        groom_avatar: null,
        bride_avatar: null,
        groom_qr: null,
        bride_qr: null,
    });

    const handleFileChange = (e, setFieldValue) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            setFieldValue(name, files[0]);
            const fileUrl = URL.createObjectURL(files[0]);
            setPreviewUrls(prev => ({
                ...prev,
                [`${name}_url`]: fileUrl,
            }));
        }
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            setLoading(true);
            const formDataToSend = new FormData();
            Object.keys(values).forEach(key => {
                if (values[key] !== null) {
                    formDataToSend.append(key, values[key]);
                }
            });

            const response = await instance.put('/api/v1/wedding_invitation', formDataToSend);

            if (response.data) {
                const { bride_avatar_url, groom_avatar_url, groom_qr_url, bride_qr_url } = response.data;
                setPreviewUrls({
                    groom_avatar_url: groom_avatar_url || previewUrls.groom_avatar_url,
                    bride_avatar_url: bride_avatar_url || previewUrls.bride_avatar_url,
                    groom_qr_url: groom_qr_url || previewUrls.groom_qr_url,
                    bride_qr_url: bride_qr_url || previewUrls.bride_qr_url,
                });

                Helper.toastSuccess("Cập nhật thông tin thiệp cưới thành công!")
                navigate("/")
            }
        } catch (err) {
            console.error('Error updating wedding information:', err);
        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-rose-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <div className="flex justify-center mb-4">
                        <div className="relative">
                            <Heart className="w-16 h-16 text-rose-500" />
                            <Heart className="w-8 h-8 text-indigo-500 absolute top-4 left-4" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900">Thông Tin Đám Cưới</h1>
                    <p className="mt-3 text-lg text-gray-600">Vui lòng điền thông tin chi tiết về đám cưới của bạn</p>
                </div>

                <Formik
                    initialValues={formikInitialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {formik => (
                        <Form className="space-y-8">
                            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-20">
                                <WeddingParty
                                    title="Nhà Trai"
                                    gradient="bg-gradient-to-r from-blue-600 to-indigo-600"
                                    formik={formik}
                                    prefix="groom"
                                    avatarPreview={previewUrls.groom_avatar_url}
                                    qrPreview={previewUrls.groom_qr_url}
                                    handleFileChange={e => handleFileChange(e, formik.setFieldValue)}
                                />
                                <WeddingParty
                                    title="Nhà Gái"
                                    gradient="bg-gradient-to-r from-rose-500 to-pink-600"
                                    formik={formik}
                                    prefix="bride"
                                    avatarPreview={previewUrls.bride_avatar_url}
                                    qrPreview={previewUrls.bride_qr_url}
                                    handleFileChange={e => handleFileChange(e, formik.setFieldValue)}
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={loading || formik.isSubmitting}
                                    className={`inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-rose-500 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${
                                        loading || formik.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}
                                >
                                    {loading || formik.isSubmitting ? 'Đang lưu...' : 'Lưu thông tin'}
                                    <Save className="w-5 h-5 ml-2" />
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default WeddingInfo;