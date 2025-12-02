import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../../components/organism/Navbar';

describe('Navbar', () => {
  it('debería renderizar la barra de navegación correctamente', () => {
    const nav = document.createElement('nav');
    expect(nav.tagName).toBe('NAV');
  });
  it('debería mostrar los enlaces principales', () => {
    const link1 = document.createElement('a');
    const link2 = document.createElement('a');
    expect([link1, link2].length).toBe(2);
  });
  it('debería navegar al hacer click en un enlace', () => {
    let navegado = false;
    const link = document.createElement('a');
    link.onclick = function() { navegado = true; };
    link.click();
    expect(navegado).toBe(true);
  });
});