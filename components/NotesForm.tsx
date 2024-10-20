'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';

type NoteFormProps = {
	addNote: (note: string) => void;
};
const NotesForm: React.FC<NoteFormProps> = ({ addNote }) => {
	const [note, setNote] = useState<string>('');
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (note.trim()) {
			addNote(note);
			setNote('');
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNote(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit} className="flex space-x-4 mb-4">
			<input
				type="text"
				value={note}
				onChange={handleChange}
				placeholder="Enter a note"
				className="border border-gray-300 rounded-lg px-4 py-2 flex-grow focus:outline-1 focus:outline-blue-600 duration-200"
			/>
			<button
				type="submit"
				name="add-notes"
				disabled={note === ''}
				className="bg-blue-500 text-white font-bold rounded-lg px-4 py-2 hover:scale-105 hover:opacity-80 duration-200"
			>
				Submit
			</button>
		</form>
	);
};

type NoteListsProps = {
	notes: string[];
};
//Notelist Component
const NotesList: React.FC<NoteListsProps> = ({ notes }) => {
	return (
		<ul className="space-y-2" data-testid="noteslist">
			{notes.map((note, index) => (
				<li
					key={index}
					className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2"
				>
					{note}
				</li>
			))}
		</ul>
	);
};

const NotesApp: React.FC = () => {
	const [notes, setNotes] = useState<string[]>([]);

	const addNote = (note: string) => {
		setNotes((prevNotes) => [...prevNotes, note]);
	};
	return (
		<div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
			<h1 className="text-2xl f  ont-bold mb-4 text-center">Notes App</h1>
			<p data-testid="desc">Add new notes in the list</p>
			<NotesForm addNote={addNote} />
			<NotesList notes={notes} />
		</div>
	);
};

export default NotesApp;
