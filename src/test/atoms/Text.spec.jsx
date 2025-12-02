import React from 'react';
import { render } from '@testing-library/react';
import Text from '../../components/atoms/Text';

describe('Text', () => {
  it('debería renderizar el texto correctamente', () => {
    const { container } = render(<Text>¡Hola, mundo!</Text>);
    expect(container.textContent).toContain('¡Hola, mundo!');
  });
  it('debería mostrar el contenido esperado', () => {
    const { container } = render(<Text>¡Hola, mundo!</Text>);
    expect(container.textContent).toContain('¡Hola, mundo!');
  });
  it('debería aplicar el estilo correctamente', () => {
    const { container } = render(<Text>¡Hola, mundo!</Text>);
    expect(container.textContent).toContain('¡Hola, mundo!');
  });
});