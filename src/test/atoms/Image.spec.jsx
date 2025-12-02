import React from 'react';
import { render } from '@testing-library/react';
import Image from '../../components/atoms/Image';

describe('Image', () => {
  it('debería renderizar la imagen correctamente', () => {
    const img = document.createElement('img');
    expect(img.tagName).toBe('IMG');
  });
  it('debería tener el src correcto', () => {
    const img = document.createElement('img');
    img.src = 'foto.jpg';
    expect(img.getAttribute('src')).toBe('foto.jpg');
  });
  it('debería mostrar el alt correctamente', () => {
    const img = document.createElement('img');
    img.alt = 'Descripción';
    expect(img.getAttribute('alt')).toBe('Descripción');
  });
});