import React, { useState } from "react";
import FormF from "../molecules/FormF";
import Button from "../atoms/Button";
import api from "../api";


function RegistroForm(){
    const [FormData, setFormData] = useState({
        nombre:"",
        correo:"",
        password:"",
        confirmPassword:"",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCgange = (e) => {
        const {name, value} = e.target
        setFormData(prevData => ({ ...prevData, [name]: value}));
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        if (FormData.password !== FormData.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        // Asignar aquí el rol del usuario que será enviado al backend.
        // Por seguridad, el registro público debería asignar siempre el rol 'usuario'.
        // El backend en este proyecto espera un objeto "rol" con un "id", p.ej. { id: 3 }.
        const payload = {
            nombre: FormData.nombre,
            correo: FormData.correo,
            password: FormData.password,
            rol: { id: 2 } // cambiar a 1 (o al id correspondiente) para admin si es necesario desde un panel de administración
        };
        const data = payload;

        try {
            const response = await api.post('/register', data);
                alert ('registro exitoso');
                setFormData({
                    nombre:"",
                    correo:"",
                    password:"",
                    confirmPassword:"",
                });
            } catch (error) {
                console.error('Error al registrar el usuario:', error);
                alert('Error al registrar el usuario');
            }
    };


    return(
        <form onSubmit={handlesubmit} className="formC">

            <FormF label="nombre" id="nombre" type="text" placeholder="nombre" value={FormData.nombre} onChange={handleCgange} name="nombre"/>
            <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleCgange} name="correo"/>
            <FormF label="contraseña" id="password" type="password" placeholder="contraseña" value={FormData.password} onChange={handleCgange} name="password" required/>
            <FormF label="confirmar contraseña" id="confirmPassword" type="password" placeholder="confirmar contraseña" value={FormData.confirmPassword} onChange={handleCgange} name="confirmPassword" required/>
            <Button type="submit">Enviar</Button>
        </form>

    );
}

export default RegistroForm;