import React, { useEffect, useState } from 'react';

const TodoAndPhotoList = () => {
	const [todos, setTodos] = useState<string[]>([]);
	const [photos, setPhotos] = useState<string[]>([]);

	useEffect(() => {
		//Fetch todos
		fetch(`https://jsonplaceholder.typicode.com/todos`)
			.then((response) => response.json())
			.then((data) => setTodos(data));

		//Fetch photos
		fetch(`https://jsonplaceholder.typicode.com/photos`)
			.then((response) => response.json())
			.then((data) => setPhotos(data));
	}, []);
	return <div></div>;
};

export default TodoAndPhotoList;
