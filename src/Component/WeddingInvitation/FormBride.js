function FormBride({ formik }) {
    return (
        <div className="w-1/2 px-4 space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">Thông tin cô dâu</h2>
            <div>
                <label className="block text-gray-600">Ảnh cô dâu</label>
                {formik.values.bride_avatar_url ? (
                    <img
                        src={formik.values.bride_avatar_url}
                        alt="Ảnh cô dâu"
                        className="w-32 h-32 object-cover rounded-md border border-gray-300"
                    />
                ) : (
                    <div
                        className="w-32 h-32 flex items-center justify-center border border-gray-300 rounded-md text-gray-400">
                        Chưa có ảnh
                    </div>
                )}
                <input
                    type="file"
                    name="bride_avatar"
                    className="w-full p-2 border border-gray-300 rounded-md mt-2"
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                            formik.setFieldValue("bride_avatar", file);
                            formik.setFieldValue("bride_avatar_url", URL.createObjectURL(file));
                        }
                    }}
                />
            </div>
            {[
                {label: "Tên cô dâu", name: "bride_name"},
                {label: "Ba cô dâu", name: "bride_dad"},
                {label: "Mẹ cô dâu", name: "bride_mom"},
                {label: "Địa chỉ", name: "bride_address"},
            ].map(({label, name}) => (
                <div key={name}>
                    <label className="block text-gray-600">{label}</label>
                    <input
                        type="text"
                        name={name}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        value={formik.values[name]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched[name] && formik.errors[name] && (
                        <p className="text-red-500 text-sm">{formik.errors[name]}</p>
                    )}
                </div>
            ))}
            <div>
                <label className="block text-gray-600">QrCode</label>
                {formik.values.bride_qr_url ? (
                    <img
                        src={formik.values.bride_qr_url}
                        className="w-32 h-32 object-cover rounded-md border border-gray-300"
                        alt="Qr cô dâu"
                    />
                ) : (
                    <div
                        className="w-32 h-32 flex items-center justify-center border border-gray-300 rounded-md text-gray-400">
                        Chưa có ảnh
                    </div>
                )}
                <input
                    type="file"
                    name="bride_qr"
                    className="w-full p-2 border border-gray-300 rounded-md mt-2"
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                            formik.setFieldValue("bride_qr", file);
                            formik.setFieldValue("bride_qr_url", URL.createObjectURL(file));
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default FormBride;
