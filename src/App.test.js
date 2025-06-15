import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el formulario', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Ingresa tu nombre/i);
  expect(inputElement).toBeInTheDocument();
});