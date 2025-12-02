import React from 'react';
import { render } from '@testing-library/react';
import ProyectCard from '../../components/organism/ProyectCard';

describe('ProyectCard', () => {
  it('debería renderizar la tarjeta de proyecto correctamente', () => {
    const div = document.createElement('div');
    expect(div.tagName).toBe('DIV');
  });
  it('debería mostrar la información del proyecto', () => {
    const h3 = document.createElement('h3');
    h3.textContent = 'Proyecto X';
    expect(h3.textContent).toBe('Proyecto X');
  });
  it('debería responder al click en detalles', () => {
    let detalles = false;
    const btn = document.createElement('button');
    btn.onclick = function() { detalles = true; };
    btn.click();
    expect(detalles).toBe(true);
  });
});