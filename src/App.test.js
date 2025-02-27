// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the chatbot heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/React Chatbot in Electron/i);
  expect(headingElement).toBeInTheDocument();
});