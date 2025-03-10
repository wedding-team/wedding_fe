import React, { createContext, useState, useEffect } from 'react';
import instance from '../Apis/instance';
import Helper from '../Utils/Helper';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const clearAuthData = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('client');
        localStorage.removeItem('uid');
    };

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem('token');
            const client = localStorage.getItem('client');
            const uid = localStorage.getItem('uid');

            if (token && client && uid) {
                try {
                    const response = await instance.get('/api/v1/auth/validate_token');
                    setUser(response.data.data);
                    console.log(response.data.data);
                } catch (error) {
                    console.error('Token validation failed:', error.response?.data || error.message);
                    clearAuthData();
                    setUser(null);
                }
            }
            setLoading(false);
        };
        validateToken();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await instance.post('/api/v1/auth/sign_in', { email, password });
            setUser(response.data.data);
        } catch (error) {
            const errorMessage = error.response?.data?.errors?.[0] || 'Đăng nhập thất bại!';
            throw new Error(errorMessage);
        }
    };

    const logout = async () => {
        try {
            await instance.delete('/api/v1/auth/sign_out');
            clearAuthData();
            setUser(null);
        } catch (error) {
            console.error('Logout failed:', error.response?.data || error.message);
            Helper.toastError('Đăng xuất thất bại!');
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {loading ? (
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
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};