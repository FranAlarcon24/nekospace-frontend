import React, { useState } from "react";
import FormF from "../molecules/FormF";
import Button from "../atoms/Button";
import ButtonL from "../molecules/ButtonL";
import { generarMensaje } from "../../utils/generarMensaje";
import {useAuth } from "../../context/AuthC";
import { useNavigate } from "react-router-dom";


function InicioForm(){
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    nombre:"",
    correo: "",
    password: ""
  });

  const handleCgange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

    const { login } = useAuth();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!FormData.nombre || !FormData.correo || !FormData.password) {
      generarMensaje('Completa todos los campos', 'error');
      return;
    }
    try {
      const user = await login(FormData);
      if (user) {
        generarMensaje('Sesión iniciada', 'success');
      } else {
        generarMensaje('Sesión iniciada (sin datos de usuario devueltos)', 'warning');
      }
      navigate("/");
    } catch (error) {
      generarMensaje(error?.message || 'Error al iniciar sesión', 'error');
    }
    setFormData({ nombre: "", correo: "", password: "" });
  };

  return(
    <form onSubmit={handlesubmit} className="formC">
      <FormF label="nombre" id="nombre" type="text" placeholder="nombre" value={FormData.nombre} onChange={handleCgange} name="nombre"/>
      <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleCgange} name="correo"/>
      <FormF label="contraseña" id="password" type="password" placeholder="contraseña" value={FormData.password} onChange={handleCgange} name="password"/>
      <div style={{ margin: '1rem 0' }}>
        
      </div>
      <button className="btnI" type="submit">Ingresar</button>
      <ButtonL className="btnI" href="/create-user">Registrarse</ButtonL>
    </form>
  );
}

export default InicioForm;