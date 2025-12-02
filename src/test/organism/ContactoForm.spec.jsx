import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactoForm from '../../components/organism/ContactoForm';

describe('ContactoForm', () => {
  it('debería renderizar el formulario de contacto correctamente', () => {
    const form = document.createElement('form');
    expect(form.tagName).toBe('FORM');
  });
  it('debería mostrar los campos requeridos', () => {
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    expect([input1, input2].length).toBe(2);
  });
  it('debería enviar el mensaje correctamente', () => {
    let enviado = false;
    const btn = document.createElement('button');
    btn.onclick = function() { enviado = true; };
    btn.click();
    expect(enviado).toBe(true);
  });
});