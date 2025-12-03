import React, { useState } from "react";
import FormF from "../molecules/FormF";
import Button from "../atoms/Button";
import { AuthC } from "../../context/AuthC";
import generarMensaje from "../../utils/mensajes";


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
        setError('');
        setLoading(true);

        if (FormData.password !== FormData.confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await api.post('/auth/register', {
                nombre: FormData.nombre,
                correo: FormData.correo,
                numero: FormData.numero,
                password: FormData.password,
                confirmPassword: FormData.confirmPassword,
            });
            generarMensaje('Registro exitoso');
            setFormData({
                nombre:"",
                correo:"",
                password:"",
                confirmPassword:"",
            });
        } catch (error) {
            setError('Error en el registro. Inténtalo de nuevo.');
            generarMensaje('Error en el registro', 'error');
        } finally {
            setLoading(false);
        }
    };


    return(
        <form onSubmit={handlesubmit} className="formC">

            <FormF label="nombre" id="nombre" type="text" placeholder="nombre" value={FormData.nombre} onChange={handleCgange} name="nombre"/>
            <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleCgange} name="correo"/>
            <FormF label="contraseña" id="contraseña" type="password" placeholder="contraseña" value={FormData.password} onChange={handleCgange} name="contraseña" requiered/>
            <FormF label="confirmar contraseña" id="confirmar contraseña" type="password" placeholder="confirmar contraseña" value={FormData.confirmPassword} onChange={handleCgange} name="confirmar contraseña" requiered/>
            <Button type="submit">Enviar</Button>
        </form>

    );
}

export default RegistroForm;