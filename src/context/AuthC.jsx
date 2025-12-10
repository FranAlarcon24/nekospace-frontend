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
        if (userData && userData !== 'undefined') {
            try {
                setUser(JSON.parse(userData));
            } catch (err) {
                console.warn('Invalid user in localStorage, removing it.', err);
                localStorage.removeItem('user');
            }
        } else if (userData === 'undefined') {
            // clean up invalid stored value
            localStorage.removeItem('user');
        }

        // restore access token header if present and valid
        const storedToken = localStorage.getItem('access_token');
        if (storedToken && storedToken !== 'undefined') {
            setToken(storedToken);
            api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
        }

        setLoading(false);
    }, []);

    const login = async (userData) => {
        try {
            const res = await api.post('/auth/login', userData, { withCredentials: true });
            // handle different possible response shapes from the backend
                        const accessToken = res.data.accessToken || res.data.token || res.data.access_token || null;
                        let user = res.data.user || res.data.usuario || res.data.data || null;

                        // If backend returns role/user info at the root (like your example), use res.data as user
                        if (!user && res.data) {
                            const maybeRole = res.data.Rol || res.data.role || res.data.rol || res.data.nombre || res.data.email;
                            if (maybeRole) {
                                user = res.data;
                            }
                        }

                        if (!accessToken) console.warn('AuthC.login: no access token found in response', res.data);
                        if (!user) console.warn('AuthC.login: no user object found in response', res.data);

                        if (accessToken) {
                                localStorage.setItem('access_token', accessToken);
                                setToken(accessToken);
                                api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                        }

                        if (user) {
                                localStorage.setItem('user', JSON.stringify(user));
                                setUser(user);
                        }

                        return user || null;
        }catch (error) {
            if (error.response?.status === 401) throw new Error('Correo o contraseña incorrectos');
            if (error.response?.status >= 500) throw new Error('Error del servidor');
            console.error('error al iniciar session', error);
            throw new Error('credenciales invalidas');
        }

    };

    const logout = () => {
        // remove the access token (consistent key used on login)
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        setUser(null);
        setToken(null);
        delete api.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, token }}>
            {children}
        </AuthContext.Provider>
    );
} 
export default AuthContext;