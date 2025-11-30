import React, { useState } from "react";
import FormF from "../molecules/FormF";
import Button from "../atoms/Button";
import ButtonL from "../molecules/ButtonL";
import { AuthProvider, useAuth } from "../../context/AuthC";

function InicioForm(){
  const [FormData, setFormData] = useState({
        correo:"",
        contraseña:""
    });

    const handleCgange = (e) => {
        const {name, value} = e.target
        setFormData(prevData => ({ ...prevData, [name]: value}));
    };

    const { login } = useAuth();

    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log("datos del formulario:", FormData);
        setFormData({correo:"",contraseña:""});
        try {
          await login(FormData.correo, FormData.contraseña);
        } catch (error) {
          console.error(error.message);
        }   

    };

    return(
        <form onSubmit={handlesubmit} className="formC">

            <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleCgange} name="correo"/>
            <FormF label="contraseña" id="contraseña" type="password" placeholder="contraseña" value={FormData.contraseña} onChange={handleCgange} name="contraseña"/>

            <Button href="/">Ingresar</Button>
            <ButtonL href="/create-user">Registrarse</ButtonL>
        </form>

    );
}

export default InicioForm;