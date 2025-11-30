import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/create.css'
import '../styles/Contacto.css'

const CreateUser = () => {
    const [form, setForm] = useState({ nombre:"", correo:"", contrasena:""});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.correo || !form.contrasena) {
            console.log('Por favor, complete todos los campos obligatorios.');
            return;
        }

        setLoading(true);

        try {
            const usuario = {
                "nombre": form.nombre,
                "correo": form.correo,
                "password": form.password,
                rol: {
                    "id": 3
                }
            }
            const response = await UserService.createUser(usuario);

            console.log('usuario creado'); 
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="fon4">
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