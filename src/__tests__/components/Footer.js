import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer'
 

describe('Footer', () => {
    test('should render without errors', () => {
      render(<Footer />);
      expect(screen.getByText(/Copyright/)).toBeInTheDocument();
    });
  });