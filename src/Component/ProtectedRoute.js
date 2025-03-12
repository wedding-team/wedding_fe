import React, { useMemo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const { isAuthenticated, loading } = useSelector(state => state.auth);

    const isUserAuthenticated = useMemo(() => {
        return isAuthenticated || !!localStorage.getItem("accessToken");
    }, [isAuthenticated]);

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

    return isUserAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
