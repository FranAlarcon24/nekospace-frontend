import React, { useState } from "react";
import FormF from "../molecules/FormF";
import Button from "../atoms/Button";
import { AuthC } from "../../context/AuthC";


function RegistroForm(){
    const [FormData, setFormData] = useState({
        nombre:"",
        correo:"",
        password:"",
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
                password: FormData.password
            });
            console.log('Registro exitoso:', response.data);
            setFormData({
                nombre:"",
                correo:"",
                password:"",
            });
        } catch (error) {
            setError('Error en el registro. Inténtalo de nuevo.');
            console.error('Error en el registro:', error);
        } finally {
            setLoading(false);
        }
    


    return(
        <form onSubmit={handlesubmit} className="formC">

            <FormF label="nombre" id="nombre" type="text" placeholder="nombre" value={FormData.nombre} onChange={handleCgange} name="nombre"/>
            <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleCgange} name="correo"/>
            <FormF label="contraseña" id="contraseña" type="password" placeholder="contraseña" value={FormData.password} onChange={handleCgange} name="contraseña" requiered/>

            <Button type="submit">Enviar</Button>
        </form>

    );
}
}

export default RegistroForm;