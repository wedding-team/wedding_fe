export const TextAreaInput = ({
                                  name,
                                  value,
                                  onChange,
                                  onBlur,
                                  label,
                                  placeholder,
                                  rows = 5,
                                  ...props
                              }) => (
    <div>
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            rows={rows}
            className="w-full p-3 border border-gray-300 rounded-lg"
            {...props}
        />
    </div>
);