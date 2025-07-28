import { MdAnimation } from "react-icons/md";
import SelectInput from "../../components/common/SelectInput";
import { useEffect, useState } from "react";
import EffectApi from "../../apis/EffectApi";

function Effect({ value, onChange, name }) {
    const [effects, setEffects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEffects = async () => {
            try {
                const response = await EffectApi.getAllEffects();
                const formatted = response.data.map(effect => ({
                    label: effect.label,
                    value: effect.name
                }));
                setEffects(formatted);
            } catch (err) {
                console.error("Error fetching effects:", err);
                setError("Không thể tải danh sách hiệu ứng.");
            } finally {
                setLoading(false);
            }
        };
        fetchEffects();
    }, []);

    return (
        <div>
            <label className="flex text-lg font-medium text-gray-700 mb-2 gap-2 items-center">
                <MdAnimation /> Hiệu ứng
            </label>
            {loading ? (
                <div className="text-sm text-gray-500">Đang tải hiệu ứng...</div>
            ) : error ? (
                <div className="text-sm text-red-500">{error}</div>
            ) : (
                <SelectInput
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder="-- Chọn hiệu ứng --"
                    options={effects}
                />
            )}
        </div>
    );
}

export default Effect;
