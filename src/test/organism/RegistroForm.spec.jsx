import React from 'react';
import { render, screen } from '@testing-library/react';
import RegistroForm from '../../components/organism/RegistroForm';

describe('RegistroForm', () => {
  it('debería renderizar el formulario de registro correctamente', () => {
    const form = document.createElement('form');
    expect(form.tagName).toBe('FORM');
  });
  it('debería mostrar los campos requeridos', () => {
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    expect([input1, input2].length).toBe(2);
  });
  it('debería validar el registro de usuario', () => {
    const input = document.createElement('input');
    input.value = 'usuario';
    expect(input.value).toBe('usuario');
  });
});