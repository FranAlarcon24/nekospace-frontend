import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api.js';

const AuthContext = createContext();

export const useAuth = () => {
   return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
        setLoading(false);
    }, []);

    const login = async (userData) => {
        try {
            const res = await api.post('/auth/login', userData, { withCredentials: true });
            const accessToken = res.data.accessToken; 
            const user = res.data.user;
           

            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            setUser(user);
            console.log('holaaa');
            setToken(accessToken);
            api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            return user;
        }catch (error) {
            if (error.response?.status === 401) throw new Error('Correo o contraseña incorrectos');
            if (error.response?.status >= 500) throw new Error('Error del servidor');
            console.error('error al iniciar session', error);
            throw new Error('credenciales invalidas');
        }

    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, token }}>
            {children}
        </AuthContext.Provider>
    );
} 
export default AuthContext;