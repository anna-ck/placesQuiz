import React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import Result from '../../components/Result'

let consoleOutput = []

function click () {
    consoleOutput.push('clicked')
}

describe('Result', () => {
    afterEach(cleanup)
    test('should render without errors', () => {
      render(<Result />)
      expect( () => {screen.getByText(/Your final result is/)}).not.toThrow()
    });
    test('should render score equal to 20 when finalResult prop is equal to 20', () => {
        render(<Result finalResult={20}/>)
        expect( () => {screen.getByText(/Your final result is 20/)}).not.toThrow()
    });
    test('should render a clicable try again button', () => {
        render(<Result finalResult={20} onTryAgain={click}/>)
        fireEvent.click(screen.getByText(/Try again/))
        expect(consoleOutput).toEqual(['clicked'])
    });
  });