import React from 'react';
import {Navigate} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    // Nếu đang kiểm tra token (loading = true), hiển thị màn hình chờ
    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <svg
                    className="animate-spin h-8 w-8 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8h-8z"
                    />
                </svg>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace/>;
    }


    return children;
};

export default ProtectedRoute;