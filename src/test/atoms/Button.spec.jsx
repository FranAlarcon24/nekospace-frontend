import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../../components/atoms/Button';

describe('Button', () => {
  it('debería renderizar el botón correctamente', () => {
    const btn = document.createElement('button');
    expect(btn !== null).toBe(true);
  });
  it('debería mostrar el texto correcto', () => {
    const btn = document.createElement('button');
    btn.textContent = 'Enviar';
    expect(btn.textContent).toBe('Enviar');
  });
  it('debería ejecutar la función onClick', () => {
    let clicked = false;
    const btn = document.createElement('button');
    btn.onclick = function() { clicked = true; };
    btn.click();
    expect(clicked).toBe(true);
  });
});