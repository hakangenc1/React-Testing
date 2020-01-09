import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../components/Counter';
import TodoForm from '../components/TodoForm';

afterEach(cleanup);

describe('<TodoForm />', () => {
  it('Todo Form renders correctly', () => {
    const { queryByTestId, queryByPlaceholderText } = render(<TodoForm />);

    // Arrange
    const textInput = queryByPlaceholderText('Enter a todo item');
    const addButton = queryByTestId('btn-click');

    // Act
    // fireEvent.change(textInput, { target: { value: 'Test2' } });

    // Assert
    expect(addButton).toBeTruthy();
    expect(textInput).toBeTruthy();
  });

  it('Todo List adding an item', () => {
    const { queryByTestId, queryByPlaceholderText } = render(<TodoForm />);
    const searchInput = queryByPlaceholderText('Enter a todo item');
    const addButton = queryByTestId('btn-click');
    fireEvent.change(searchInput, { target: { value: 'Test2' } });
    expect(searchInput.value).toBe('Test2');
    fireEvent.click(addButton);
    expect(searchInput.value).toBe('');
    const todoItem = queryByTestId('todo');
    expect(todoItem.textContent).toBe('Test2');
  });
});

describe('<Counter />', () => {
  it('Does not trigger test function', () => {
    const testFunction = jest.fn();
    const { queryByTestId } = render(<Counter testFunction={testFunction} />);
    fireEvent.click(queryByTestId('increment'));
    expect(testFunction).not.toHaveBeenCalled();
  });

  it('Increment button', () => {
    const { queryByTestId } = render(<Counter />);
    const incrementNumber = queryByTestId('counter');
    fireEvent.click(queryByTestId('increment'));
    expect(parseInt(incrementNumber.textContent)).toBe(1);
    const decrementNumber = queryByTestId('counter');
    fireEvent.click(queryByTestId('decrement'));
    expect(parseInt(decrementNumber.textContent)).toBe(0);
  });
});
