import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoute = ({isAdmin, isAuthPage}) => {
    const {isAuthenticated} = useSelector((state) => state.auth);
    const {isAdminAuthenticated} = useSelector((state) => state.admin);

    if (isAuthPage && isAuthenticated) {
        return <Navigate to="/wedding/couple" replace/>;
    }

    if (isAuthPage && isAdminAuthenticated) {
        return <Navigate to="/admin/dashboard" replace/>;
    }

    if (isAdmin) {
        return isAdminAuthenticated ? <Outlet/> : <Navigate to="/admin" replace/>;
    } else {
        return isAuthenticated ? <Outlet/> : <Navigate to="/login" replace/>;
    }
};

export default ProtectedRoute;
