/* eslint-disable @typescript-eslint/no-unused-vars */
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import NotesApp from './NotesForm';

describe('Testing NoteApp component', () => {
	beforeEach(() => {
		render(<NotesApp />);
	});

	it('renders a title', () => {
		const text = screen.getByText(/Notes App/i);
		expect(text).toBeInTheDocument();
	});

	it('have a description', () => {
		const desc = screen.getByTestId('desc');
		expect(desc).toBeInTheDocument();
	});

	it('have a inputBox', () => {
		const inputBox = screen.getByPlaceholderText(/Enter a note/i);
		expect(inputBox).toBeInTheDocument();
	});

	it('have a button', () => {
		const submitBtn = screen.getByRole('button');
		expect(submitBtn).toBeInTheDocument();
	});

	it('expect the add Btn to be disable', () => {
		const addNoteBtn = screen.getByRole('button');
		expect(addNoteBtn).toBeDisabled();
	});

	it('Fill the input note textbox to make button enabled', () => {
		const textInput = screen.getByPlaceholderText(/Enter a note/i);
		fireEvent.change(textInput, { target: { value: 'Test note 1' } });
		const addNoteBtn = screen.getByRole('button');
		expect(addNoteBtn).toBeEnabled();
	});
});
