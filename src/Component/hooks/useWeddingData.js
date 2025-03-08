import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WeddingInvitationApi from '../../Apis/WeddingInvitationApi';
import Helper from '../../Utils/Helper';

const useWeddingData = () => {
    const navigate = useNavigate();
    const [previewUrls, setPreviewUrls] = useState({
        groom_avatar_url: '',
        bride_avatar_url: '',
        groom_qr_url: '',
        bride_qr_url: '',
    });
    const [loading, setLoading] = useState(false);
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

    useEffect(() => {
        const fetchWeddingInfo = async () => {
            try {
                setLoading(true);
                const response = await WeddingInvitationApi.getWeddingInfo();
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

                    setFormikInitialValues({
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
                    });
                }
            } catch (err) {
                Helper.toastError('Lỗi không thể lấy thông tin thiệp cưới!')
            } finally {
                setLoading(false);
            }
        };

        fetchWeddingInfo();
    }, []);

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

            const response = await WeddingInvitationApi.updateWeddingInfo(formDataToSend);
            if (response.data) {
                const { bride_avatar_url, groom_avatar_url, groom_qr_url, bride_qr_url } = response.data;
                setPreviewUrls({
                    groom_avatar_url: groom_avatar_url || previewUrls.groom_avatar_url,
                    bride_avatar_url: bride_avatar_url || previewUrls.bride_avatar_url,
                    groom_qr_url: groom_qr_url || previewUrls.groom_qr_url,
                    bride_qr_url: bride_qr_url || previewUrls.bride_qr_url,
                });

                Helper.toastSuccess('Cập nhật thông tin thiệp cưới thành công!');
                navigate('/');
            }
        } catch (err) {
            Helper.toastError('Cập nhật thông tin thiệp cưới thất bại!')
        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    };

    return {
        previewUrls,
        loading,
        formikInitialValues,
        handleFileChange,
        handleSubmit,
    };
};

export default useWeddingData;