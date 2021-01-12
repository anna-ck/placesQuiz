import React from 'react';
import { render, screen, cleanup, fireEvent} from '@testing-library/react';
import App from '../../components/App'

describe('App', () => {
    afterEach(cleanup)
    test('should have start quiz button', () => {
        render(<App />);
        expect( () => {screen.getByText(/Start quiz/)}).not.toThrow()
      })
      test('should start a quiz when clicking on the start button', () => {
        render(<App />);
        fireEvent.click(screen.getByText(/Start quiz/))
        expect( () => {screen.getByText('1/12')}).not.toThrow()
      })
})