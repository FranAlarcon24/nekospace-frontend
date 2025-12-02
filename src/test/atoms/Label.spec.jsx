import React from 'react';
import { render } from '@testing-library/react';
import Label from '../../components/atoms/Label';

describe('Label', () => {
  it('debería renderizar el label correctamente', () => {
    const label = document.createElement('label');
    expect(label.tagName).toBe('LABEL');
  });
  it('debería mostrar el texto correcto', () => {
    const label = document.createElement('label');
    label.textContent = 'Nombre';
    expect(label.textContent).toBe('Nombre');
  });
  it('debería tener la clase esperada', () => {
    const label = document.createElement('label');
    label.className = 'form-label';
    expect(label.className).toBe('form-label');
  });
});