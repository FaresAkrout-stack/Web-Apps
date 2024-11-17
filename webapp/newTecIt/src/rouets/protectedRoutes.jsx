import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/contextProvider';

const ProtectedRoute = () => {
    const { token } = useStateContext();

    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
