export const DateTimeInput = ({ name, value, onChange, onBlur, label, type = "date", ...props }) => {
    const minDate = type === "date" ? new Date().toISOString().split("T")[0] : undefined;

    return (
        <div>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                min={minDate}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm hover:border-gray-400 transition-colors"
                {...props}
            />
        </div>
    );
};
