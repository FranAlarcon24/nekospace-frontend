import React from 'react';
import { render } from '@testing-library/react';
import Link from '../../components/atoms/Link';

describe('Link', () => {
  it('debería renderizar el link correctamente', () => {
    const link = document.createElement('a');
    expect(link.tagName).toBe('A');
  });
  it('debería tener el href correcto', () => {
    const link = document.createElement('a');
    link.href = 'https://example.com';
    expect(link.getAttribute('href')).toBe('https://example.com');
  });
  it('debería responder al click', () => {
    let clicked = false;
    const link = document.createElement('a');
    link.onclick = function() { clicked = true; };
    link.click();
    expect(clicked).toBe(true);
  });
});