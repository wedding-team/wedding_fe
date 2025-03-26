import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ isAdmin, isAuthPage }) => {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);
    const { isAdminAuthenticated, adminLoading } = useSelector((state) => state.admin);

    if (loading || adminLoading) {
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

    if (isAuthPage && isAuthenticated) {
        return <Navigate to="/wedding/couple" replace />;
    }

    if (isAuthPage && isAdminAuthenticated) {
        return <Navigate to="/admin/dashboard" replace />;
    }

    if (isAdmin) {
        return isAdminAuthenticated ? <Outlet /> : <Navigate to="/admin" replace />;
    } else {
        return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
    }
};

export default ProtectedRoute;
