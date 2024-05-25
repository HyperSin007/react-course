import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
const { expect, describe, it } = require('@jest/globals');

test('add todo and clear', () => {
    render(<TodoList />);
  
    // Test adding a todo
    const descriptionInput = screen.getByPlaceholderText('Description');
    fireEvent.change(descriptionInput, { target: { value: 'Test Todo' } });
  
    const dateInput = screen.getByRole('textbox', { type: 'date' });
    fireEvent.change(dateInput, { target: { value: '2024-05-14' } });
  
    const addButton = screen.getByText('Add Todo');
    fireEvent.click(addButton);
  
    console.log(screen.debug());
  
    expect(() => screen.getByText('go to coffee')).toThrow();

    const clearButton = screen.getByText('Clear');
    fireEvent.click(clearButton);
  
    expect(()=> screen.getByText('go to coffee')).not.toBeUndefined()
  });
  
  
