import React from 'react';
import WeddingParty from './WeddingParty';

const WeddingParties = ({ formik, previewUrls, handleFileChange }) => {
    return (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-20">
            <WeddingParty
                title="Nhà Trai"
                gradient="bg-gradient-to-r from-blue-600 to-indigo-600"
                formik={formik}
                prefix="groom"
                avatarPreview={previewUrls.groom_avatar_url}
                qrPreview={previewUrls.groom_qr_url}
                handleFileChange={handleFileChange}
            />
            <WeddingParty
                title="Nhà Gái"
                gradient="bg-gradient-to-r from-rose-500 to-pink-600"
                formik={formik}
                prefix="bride"
                avatarPreview={previewUrls.bride_avatar_url}
                qrPreview={previewUrls.bride_qr_url}
                handleFileChange={handleFileChange}
            />
        </div>
    );
};

export default WeddingParties;