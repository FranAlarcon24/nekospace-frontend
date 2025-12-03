import React, { useState } from "react";
import FormF from "../molecules/FormF";
import Button from "../atoms/Button";
import { AuthC } from "../../context/AuthC";
import generarMensaje from "../../utils/generarMensaje";


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
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                alert('registro exitoso');
            } else {
                alert('error en el registro');
            }
        } catch (error) {
            console.error('Error durante el registro:', error);
        }
    };


    return(
        <form onSubmit={handlesubmit} className="formC">

            <FormF label="nombre" id="nombre" type="text" placeholder="nombre" value={FormData.nombre} onChange={handleCgange} name="nombre"/>
            <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleCgange} name="correo"/>
            <FormF label="contraseña" id="contraseña" type="password" placeholder="contraseña" value={FormData.password} onChange={handleCgange} name="password" required/>
            <FormF label="confirmar contraseña" id="confirmar contraseña" type="password" placeholder="confirmar contraseña" value={FormData.confirmPassword} onChange={handleCgange} name="confirmPassword" requiered/>
            <Button type="submit">Enviar</Button>
        </form>

    );
}

export default RegistroForm;