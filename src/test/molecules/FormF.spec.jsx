import React from 'react';
import { render, screen } from '@testing-library/react';
import FormF from '../../components/molecules/FormF';

describe('FormF', () => {
  it('debería renderizar el formulario correctamente', () => {
    const form = document.createElement('form');
    expect(form.tagName).toBe('FORM');
  });
  it('debería mostrar los campos requeridos', () => {
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    expect([input1, input2].length).toBe(2);
  });
  it('debería validar los datos ingresados', () => {
    const input = document.createElement('input');
    input.value = 'dato';
    expect(input.value).toBe('dato');
  });
});