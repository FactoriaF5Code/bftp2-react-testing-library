import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('cuando se carga la página, el contador empieza en cero', () => {
  render(<App />)

  const contador = screen.getByText(/La cuenta es 0/i);

  expect(contador).toBeInTheDocument();
});

test('cuando hacemos click en el botón, se incrementa el contador', () => {
  render(<App />)

  const boton = screen.getByText(/incrementar/i);

  fireEvent.click(boton);

  const contador = screen.getByText(/la cuenta es 1/i);

  expect(contador).toBeInTheDocument();
});

test('el contador se reinicia al llegar a 10', () => {
  render(<App />)

  const boton = screen.getByText(/incrementar/i);

  for (let i = 0; i < 10; i++) {
    fireEvent.click(boton);
  }

  const contador = screen.getByText(/la cuenta es 0/i);
  expect(contador).toBeInTheDocument();
});


