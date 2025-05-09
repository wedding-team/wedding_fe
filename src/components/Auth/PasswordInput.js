import { useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';

function PasswordInput({
                           id,
                           label,
                           placeholder,
                           value,
                           onChange,
                           onBlur,
                           error,
                           touched,
                           isDisabled,
                           autoComplete = "current-password",
                           className = ""
                       }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            {label && (
                <label htmlFor={id} className="max-md:hidden text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    id={id}
                    type={showPassword ? "text" : "password"}
                    autoComplete={autoComplete}
                    className={`max-md:h-12 w-full px-3 py-2 border rounded-md shadow-sm placeholder:text-sm focus:outline-none  ${
                        touched && error ? 'border-red-500' : 'border-gray-300'
                    } ${className}`}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={isDisabled}
                    placeholder={placeholder}
                />
                <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? (
                        <LuEyeOff className="h-5 w-5" />
                    ) : (
                        <LuEye className="h-5 w-5" />
                    )}
                </button>
            </div>
            {touched && error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}

export default PasswordInput;