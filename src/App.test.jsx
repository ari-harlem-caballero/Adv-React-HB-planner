import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Planner App', () => {
  it('should display a list of planner entries', () => {
    render(<App />);

    // Check for placeholder entry
    screen.getByText('Start Planning');

    // Ensure custom entry doesn't already exist
    expect(screen.queryByText('My test entry!')).not.toBeInTheDocument();

    // Get form elements
    const titleInput = screen.getByPlaceholderText('Plan something');
    const dateInput = screen.getByLabelText('Due date');
    const contentInput = screen.getByPlaceholderText(
      "A brief description of what you're planning"
    );
    const addButton = screen.getByRole('button');

    // Add a new entry
    userEvent.type(titleInput, 'My test entry!');
    userEvent.type(contentInput, 'What a day to look forward to!!');
    userEvent.type(dateInput, '2022-02-22');
    userEvent.click(addButton);

    // Check that our item got added
    screen.getByText('My test entry!');
  });
});
