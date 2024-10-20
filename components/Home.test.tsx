/* eslint-disable @typescript-eslint/no-unused-vars */
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';

const sum = (a: number, b: number) => {
	return a + b;
};

test('add 2+3 should be equal to 5', () => {
	expect(sum(2, 3)).toBe(5);
	expect(sum(3, 3)).not.toBe(5);
});

test('Object assignment', () => {
	const data: object = { one: 1 };
	data['two'] = 2;
	expect(data).toEqual({ one: 1, two: 2 });
});

test(`There is "stop" in Christoph`, () => {
	expect('Christoph').toMatch(/stop/);
});

async function getResponse() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ value: 'Hello World' });
		}, 100);
	});
}

test('async getResponse should return Hello World', async () => {
	const response = await getResponse();
	expect(response).toEqual({ value: 'Hello World' });
});

describe('Testing Home Component', () => {
	beforeEach(() => {
		render(<Home />);
	});

	it('renders a heading', () => {
		const text = screen.getByText(/Home/i);
		expect(text).toBeInTheDocument();
	});

	it('renders a heading', () => {
		const text = screen.getByRole('heading', { level: 1 });
		expect(text).toBeInTheDocument();
	});

	it('test the description', () => {
		const text = screen.getByTestId('desc');
		expect(text.textContent).toMatch(/descriptions/);
	});
});
