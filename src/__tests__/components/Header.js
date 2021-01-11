import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header'
 

describe('Header', () => {
    test('should render without errors', () => {
      render(<Header />);
      expect(screen.getByText(/Quiz/)).toBeInTheDocument();
    });
    test('button should have primary text color', () => {
        render(<Header />);
        expect(screen.getByText(/Quiz/)).toHaveClass('MuiTypography-colorTextPrimary')
      })
  });