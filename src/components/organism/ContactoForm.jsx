import React, { useState } from "react";
import FormF from "../molecules/FormF";
import Button from "../atoms/Button";

function ContactoForm(){
    const [FormData, setFormData] = useState({
        nombre:"",
        correo:"",
        numero:"",
        tipoMensaje:"",
        mensaje:""
    });

    const handleCgange = (e) => {
        const {name, value} = e.target
        setFormData(prevData => ({ ...prevData, [name]: value}));
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", FormData);

    };


    return(
        <form onSubmit={handlesubmit} className="formC">

            <FormF label="nombre" id="nombre" type="text" placeholder="nombre" value={FormData.nombre} onChange={handleCgange} name="nombre"/>
            <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleCgange} name="correo"/>
            <FormF label="numero" id="numero" type="tel" placeholder="000-000-0000" value={FormData.numero} onChange={handleCgange} name="numero"/>
            <FormF label="tipo de mensaje" id="tipoMensaje" type="text" placeholder="consulta, sugerencia, reclamo" value={FormData.tipoMensaje} onChange={handleCgange} name="tipoMensaje"/>
            <FormF className="textarea" label="mensaje" id="mensaje" type="textarea" placeholder="deja aqui tu mensaje" value={FormData.mensaje} onChange={handleCgange} name="mensaje"/>

            <Button type="submit">Enviar</Button>
        </form>

    );
}

export default ContactoForm;