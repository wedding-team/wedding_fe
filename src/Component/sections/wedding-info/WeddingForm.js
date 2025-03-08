import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import WeddingParties from './WeddingParties';
import SubmitButton from './SubmitButton';
import useWeddingData from '../../hooks/useWeddingData';

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

const WeddingForm = () => {
    const { previewUrls, loading, formikInitialValues, handleFileChange, handleSubmit } = useWeddingData();

    return (
        <Formik
            initialValues={formikInitialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
        >
            {formik => (
                <Form className="space-y-8">
                    <WeddingParties
                        formik={formik}
                        previewUrls={previewUrls}
                        handleFileChange={e => handleFileChange(e, formik.setFieldValue)}
                    />
                    <SubmitButton loading={loading} isSubmitting={formik.isSubmitting} />
                </Form>
            )}
        </Formik>
    );
};

export default WeddingForm;