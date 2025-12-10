import { useState } from 'react';
import { generarMensaje } from '../utils/generarMensaje';
import brillos from '../assets/images/brillos.webp';
import { Link, useNavigate } from 'react-router-dom';
import usuarioService from '../Services/Usuarios/UsuarioService.jsx';
import { useAuth } from '../context/AuthC';
import '../styles/create.css'
import '../styles/Contacto.css'

const CreateUser = () => {
    const [form, setForm] = useState({ nombre:"", correo:"", contrasena:""});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.nombre || !form.correo || !form.contrasena) {
            generarMensaje('Completa nombre, correo y contraseña', 'error');
            return;
        }
        setLoading(true);
        try {
            const usuario = {
                nombre: form.nombre,
                correo: form.correo,
                password: form.contrasena,
            };
            const response = await usuarioService.createUsuario(usuario);
            generarMensaje('Usuario creado con éxito', 'success');

            // Mantener sesión abierta: iniciar sesión automáticamente
            try {
                const loggedUser = await login({
                    nombre: form.nombre,
                    correo: form.correo,
                    // El backend de login usa "contraseña"; convertimos desde "contrasena"
                    contraseña: form.contrasena,
                });
                const roleName = loggedUser?.rol?.nombre?.toLowerCase?.() || loggedUser?.role?.toLowerCase?.() || '';
                const roleId = loggedUser?.rol?.id ?? loggedUser?.roleId;
                const isAdmin = roleName.includes('admin') || roleId === 1; // Ajusta según tu backend
                navigate(isAdmin ? "/Homeauth" : "/");
            } catch (e) {
                // Si falla el login, informamos pero dejamos al usuario registrado
                generarMensaje('Usuario creado, pero no se pudo iniciar sesión automáticamente', 'warning');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <main
          className="fon4"
          style={{
            minHeight: '100vh',
            width: '100vw',
            margin: 0,
            paddingTop: 40,
            backgroundImage: `url(${brillos})`,
            backgroundColor: 'rgb(98, 79, 133)',
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <form onSubmit={handleSubmit} className="fon-card">
                <h1 className="text-principal">Crear usuario</h1>
                
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    className="text"
                />
                
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    name="correo"
                    value={form.correo}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    className="text"
                />
                
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="contrasena"
                    value={form.contrasena}
                    onChange={handleChange}
                    required
                    autoComplete="current-password"
                    className="text"
                />
                
                <button
                    type="submit"
                    disabled={loading}
                    className="btn4">{loading ? "Creando..." : "Crear usuario"}
                </button>
                
                <p className="text-center text-lg">
                    <Link to="/login" className="text">Iniciar session</Link>
                </p>
            </form>
        </main>
    );
};

export default CreateUser;   