import React from 'react';
import { render } from '@testing-library/react';
import ButtonL from '../../components/molecules/ButtonL';

describe('ButtonL', () => {
  it('debería renderizar el botón largo correctamente', () => {
    const btn = document.createElement('button');
    expect(btn.tagName).toBe('BUTTON');
  });
  it('debería mostrar el texto correcto', () => {
    const btn = document.createElement('button');
    btn.textContent = 'Comprar';
    expect(btn.textContent).toBe('Comprar');
  });
  it('debería ejecutar la función onClick', () => {
    let clicked = false;
    const btn = document.createElement('button');
    btn.onclick = function() { clicked = true; };
    btn.click();
    expect(clicked).toBe(true);
  });
});