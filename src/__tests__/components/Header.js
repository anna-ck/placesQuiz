import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../../components/Header'
import App from '../../components/App'
 

describe('Header', () => {
    test('should render without errors', () => {
      render(<Header />);
      expect(screen.getByText(/Quiz/)).toBeInTheDocument();
    });
    test('button should have primary text color', () => {
        render(<Header />);
        expect(screen.getByText(/Quiz/)).toHaveClass('MuiTypography-colorTextPrimary')
      })
    test('should return to home page when clicking on the logo', () => {
        render(<App />);
        fireEvent.click(screen.getByText(/Quiz Heroes/))
        expect( () => {screen.getByText(/Start quiz/)}).not.toThrow()
    })
    test('should return to home page when clicking on the logo when the quiz is running', () => {
        render(<App />);
        fireEvent.click(screen.getByText(/Start quiz/))
        fireEvent.click(screen.getByText(/Quiz Heroes/))
        expect( () => {screen.getByText(/Start quiz/)}).not.toThrow()
    })
});