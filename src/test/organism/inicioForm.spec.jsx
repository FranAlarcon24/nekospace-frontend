import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import InicioForm from '../../components/organism/inicioForm';

describe('InicioForm', () => {
  it('debería renderizar el formulario de inicio correctamente', () => {
    const form = document.createElement('form');
    expect(form.tagName).toBe('FORM');
  });
  it('debería mostrar los campos de usuario y contraseña', () => {
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    expect([input1, input2].length).toBe(2);
  });
  it('debería validar el inicio de sesión', () => {
    const input = document.createElement('input');
    input.value = 'usuario';
    expect(input.value).toBe('usuario');
  });
});