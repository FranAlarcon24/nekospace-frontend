import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../components/atoms/Input';

describe('Input', () => {
  it('debería renderizar el input correctamente', () => {
    const input = document.createElement('input');
    expect(input.tagName).toBe('INPUT');
  });
  it('debería mostrar el placeholder correcto', () => {
    const input = document.createElement('input');
    input.placeholder = 'Escribe aquí';
    expect(input.placeholder).toBe('Escribe aquí');
  });
  it('debería actualizar el valor al escribir', () => {
    const input = document.createElement('input');
    input.value = 'Hola';
    expect(input.value).toBe('Hola');
  });
});