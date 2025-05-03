import { IoChevronDown } from "react-icons/io5";

function SelectInput({ name, value, onChange, options = [], placeholder = "-- Chọn --" }) {
    return (
        <div className="relative w-full">
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-3 hover:border-gray-400 text-sm border border-gray-300 rounded-lg appearance-none pr-8"
            >
                <option value="">{placeholder}</option>
                {options.map((option, idx) => (
                    <option key={`${option.value}-${idx}`} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-gray-500">
                <IoChevronDown />
            </div>
        </div>
    );
}

export default SelectInput;
