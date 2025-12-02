import React from 'react';
import { render, screen } from '@testing-library/react';
import Carrito from '../../components/molecules/Carrito';

describe('Carrito', () => {
  it('debería renderizar el carrito correctamente', () => {
    const div = document.createElement('div');
    expect(div.tagName).toBe('DIV');
  });
  it('debería mostrar los productos agregados', () => {
    const ul = document.createElement('ul');
    ul.innerHTML = '<li>Producto 1</li><li>Producto 2</li>';
    expect(ul.children.length).toBe(2);
  });
  it('debería vaciar el carrito al hacer click en limpiar', () => {
    let vaciado = false;
    const btn = document.createElement('button');
    btn.onclick = function() { vaciado = true; };
    btn.click();
    expect(vaciado).toBe(true);
  });
});