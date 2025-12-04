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
    correo: "",
    contraseña: "",
    rol: "usuario"
  });

  const handleCgange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

    const { login } = useAuth();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!FormData.correo || !FormData.contraseña) {
      generarMensaje('Completa correo y contraseña', 'error');
      return;
    }
    try {
      await login(FormData);
      if (FormData.rol === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      generarMensaje('Error al iniciar sesión', 'error');
    }
    setFormData({ correo: "", contraseña: "", rol: "usuario" });
  };

  return(
    <form onSubmit={handlesubmit} className="formC">
      <FormF label="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" value={FormData.correo} onChange={handleCgange} name="correo"/>
      <FormF label="contraseña" id="contraseña" type="password" placeholder="contraseña" value={FormData.contraseña} onChange={handleCgange} name="contraseña"/>
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="rol">Rol:</label>
        <select name="rol" id="rol" value={FormData.rol} onChange={handleCgange} style={{ marginLeft: '0.5rem' }}>
          <option value="usuario">Usuario</option>
          <option value="admin">Administrador</option>
        </select>
      </div>
      <button className="btnI" type="submit">Ingresar</button>
      <ButtonL className="btnI" href="/create-user">Registrarse</ButtonL>
    </form>
  );
}

export default InicioForm;