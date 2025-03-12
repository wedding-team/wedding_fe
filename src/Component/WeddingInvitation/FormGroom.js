function FormGroom({ formik }) {
    return (
        <div className="w-1/2 px-4 space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">Thông tin chú rể</h2>
            <div>
                <label className="block text-gray-600">Ảnh chú rể</label>
                {formik.values.groom_avatar_url ? (
                    <img
                        src={formik.values.groom_avatar_url}
                        alt="Ảnh chú rể"
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
                    name="groom_avatar"
                    className="w-full p-2 border border-gray-300 rounded-md mt-2"
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                            formik.setFieldValue("groom_avatar", file);
                            formik.setFieldValue("groom_avatar_url", URL.createObjectURL(file));
                        }
                    }}
                />
            </div>
            {[
                {label: "Tên chú rể", name: "groom_name"},
                {label: "Ba chú rể", name: "groom_dad"},
                {label: "Mẹ chú rể", name: "groom_mom"},
                {label: "Địa chỉ", name: "groom_address"},
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
                {formik.values.groom_qr_url ? (
                    <img
                        src={formik.values.groom_qr_url}
                        alt="Qr chú rể"
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
                    name="groom_qr"
                    className="w-full p-2 border border-gray-300 rounded-md mt-2"
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                            formik.setFieldValue("groom_qr", file);
                            formik.setFieldValue("groom_qr_url", URL.createObjectURL(file));
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default FormGroom;
