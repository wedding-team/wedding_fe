import React from 'react';
import { House, User, MapPin, IdCard, QrCode, Upload } from 'lucide-react';
import InputField from '../ui/InputField';
import TextAreaField from '../ui/TextAreaField';
import FileUpload from '../common/FileUpload';

const WeddingParty = ({
                          title,
                          gradient,
                          formik,
                          prefix,
                          avatarPreview,
                          qrPreview,
                          handleFileChange,
                      }) => {
    return (
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className={`p-6 ${gradient} text-white`}>
                <h2 className="text-2xl font-bold flex items-center gap-2 justify-center">
                    {title}
                    <House className="w-6 h-6" />
                </h2>
            </div>
            <div className="p-6 space-y-4">
                <FileUpload
                    label={`Tải ảnh ${title === 'Nhà Trai' ? 'chú rể' : 'cô dâu'}`}
                    name={`${prefix}_avatar`}
                    previewUrl={avatarPreview}
                    onChange={handleFileChange}
                    accept="image/*"
                    placeholderIcon={<User className="w-16 h-16 text-gray-400" />}
                    bgColor={title === 'Nhà Trai' ? 'bg-indigo-100' : 'bg-rose-100'}
                    textColor={title === 'Nhà Trai' ? 'text-indigo-700' : 'text-rose-700'}
                />

                <InputField
                    label={`Tên ${title === 'Nhà Trai' ? 'chú rể' : 'cô dâu'}`}
                    icon={<User className={`w-4 h-4 ${title === 'Nhà Trai' ? 'text-indigo-500' : 'text-rose-500'}`} />}
                    name={`${prefix}_name`}
                    formik={formik}
                    placeholder={`Nhập tên ${title === 'Nhà Trai' ? 'chú rể' : 'cô dâu'}`}
                />

                <InputField
                    label="Địa chỉ"
                    icon={<MapPin className={`w-4 h-4 ${title === 'Nhà Trai' ? 'text-indigo-500' : 'text-rose-500'}`} />}
                    name={`${prefix}_address`}
                    formik={formik}
                    placeholder="Nhập địa chỉ"
                />

                <InputField
                    label="Họ tên Bố"
                    icon={<User className={`w-4 h-4 ${title === 'Nhà Trai' ? 'text-indigo-500' : 'text-rose-500'}`} />}
                    name={`${prefix}_dad`}
                    formik={formik}
                    placeholder="Nhập họ tên bố"
                />

                <InputField
                    label="Họ tên Mẹ"
                    icon={<User className={`w-4 h-4 ${title === 'Nhà Trai' ? 'text-indigo-500' : 'text-rose-500'}`} />}
                    name={`${prefix}_mom`}
                    formik={formik}
                    placeholder="Nhập họ tên mẹ"
                />

                <TextAreaField
                    label={`Tiểu sử ${title === 'Nhà Trai' ? 'chú rể' : 'cô dâu'}`}
                    icon={<IdCard className={`w-4 h-4 ${title === 'Nhà Trai' ? 'text-indigo-500' : 'text-rose-500'}`} />}
                    name={`${prefix}_bio`}
                    formik={formik}
                    placeholder={`Nhập vài dòng về tiểu sử ${title === 'Nhà Trai' ? 'chú rể' : 'cô dâu'}`}
                />

                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {`Mã QR ${title === 'Nhà Trai' ? 'chú rể' : 'cô dâu'} (tùy chọn)`}
                    </label>
                    <div className="flex items-center space-x-4">
                        <div className="w-24 h-24 border border-gray-300 rounded-lg flex items-center justify-center bg-gray-100">
                            {qrPreview ? (
                                <img src={qrPreview} alt="QR Code" className="w-20 h-20 object-contain" />
                            ) : (
                                <QrCode className="w-10 h-10 text-gray-400" />
                            )}
                        </div>
                        <label
                            className={`cursor-pointer ${
                                title === 'Nhà Trai' ? 'bg-indigo-100 text-indigo-700' : 'bg-rose-100 text-rose-700'
                            } px-3 py-2 rounded-lg flex items-center gap-1 text-sm`}
                        >
                            <Upload className="w-4 h-4" />
                            Tải mã QR
                            <input
                                type="file"
                                name={`${prefix}_qr`}
                                onChange={handleFileChange}
                                accept="image/*"
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingParty;