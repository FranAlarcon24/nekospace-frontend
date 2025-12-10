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
    contraseña: "",
  });

  const handleCgange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const { login } = useAuth();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!FormData.nombre || !FormData.correo || !FormData.contraseña) {
      generarMensaje('Completa todos los campos', 'error');
      return;
    }
    try {
      const loggedUser = await login({
        nombre: FormData.nombre,
        correo: FormData.correo,
        contraseña: FormData.contraseña,
      });
      const roleName = loggedUser?.rol?.nombre?.toLowerCase?.() || loggedUser?.role?.toLowerCase?.() || '';
      const roleId = loggedUser?.rol?.id ?? loggedUser?.roleId;
      const isAdmin = roleName.includes('admin') || roleId === 1; // Ajusta según tu backend
      navigate(isAdmin ? "/Homeauth" : "/");
    } catch (error) {
      generarMensaje('Error al iniciar sesión', 'error');
    }
    setFormData({ nombre: "", correo: "", contraseña: "" });
  };

  return(
    <form onSubmit={handlesubmit} className="formC">
      <FormF label="nombre" id="nombre" type="text" placeholder="nombre" value={FormData.nombre} onChange={handleCgange} name="nombre"/>
      <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleCgange} name="correo"/>
      <FormF label="contraseña" id="contraseña" type="password" placeholder="contraseña" value={FormData.contraseña} onChange={handleCgange} name="contraseña"/>
      {/* Eliminado selector de rol: el usuario no puede elegir rol. El backend lo determina. */}
      <button className="btnI" type="submit">Ingresar</button>
      <ButtonL className="btnI" href="/create-user">Registrarse</ButtonL>
    </form>
  );
}

export default InicioForm;