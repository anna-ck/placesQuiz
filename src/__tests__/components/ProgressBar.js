import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from '../../components/ProgressBar'

describe('ProgressBar', () => {
    test('should render without errors', () => {
      render(<ProgressBar remainingTime={10} />)
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    });
    test('should show 5s when remainingTime in props is equal to 25', () => {
        render(<ProgressBar remainingTime={25} />)
        expect( () => {screen.getByText(/5s/)}).not.toThrow()
      });
  });