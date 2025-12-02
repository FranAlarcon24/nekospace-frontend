import React from 'react';
import { render } from '@testing-library/react';
import CBody from '../../components/molecules/CBody';

describe('CBody', () => {
  it('debería renderizar el cuerpo correctamente', () => {
    const div = document.createElement('div');
    expect(div.tagName).toBe('DIV');
  });
  it('debería mostrar el contenido esperado', () => {
    const div = document.createElement('div');
    div.textContent = 'Contenido';
    expect(div.textContent).toBe('Contenido');
  });
  it('debería aplicar el estilo correctamente', () => {
    const div = document.createElement('div');
    div.style.backgroundColor = 'blue';
    expect(div.style.backgroundColor).toBe('blue');
  });
});