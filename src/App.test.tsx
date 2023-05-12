import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App, WrappedApp } from './App';

describe('App', () => {
  it('should render hello world', () => {
    // Arrange
    render(<WrappedApp />);
    const heading = 'Hello React Vite TypeScript';
    // Act
    // Expect
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      heading,
    );
  });
  it('should render not found if a given path was invalid', () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={['/hello']}>
        <App />
      </MemoryRouter>,
    );
    // Act
    // Expect
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Not Found',
    );
  });
});
