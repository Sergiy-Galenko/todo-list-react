// src/components/Header.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header with title and theme toggle button', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Todo List/i);
  const buttonElement = screen.getByRole('button', { name: /toggle theme/i });
  expect(titleElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
