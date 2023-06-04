// src/components/Todo.js
// the purpose of this file is to render a single todo item

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editTodo, toggleTodo } from '../redux/actions';
import styled from 'styled-components';

// Style the main container for the todo item
const TodoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 0;
`;

// Style the text of the todo item
const TodoText = styled.span`
	color: #00c1f3;
	font-size: 50px;
	font-family: 'Roboto', sans-serif;
	text-align: center;
	margin-right: 30px;
`;

// Style the buttons
const Button = styled.button`
	background-color: #00c1f3;
	border: 1px solid #ccc;
	border-radius: 2rem;
	font-family: 'Roboto', sans-serif;
	color: white;
	cursor: pointer;
	font-size: 14px;
	margin-left: 5px;
	padding: 5px 10px;
	&:hover {
		background-color: #f5f5f5;
	}
`;

// The Todo functional component
const Todo = ({ id, content, completed, deleteTodo, editTodo, toggleTodo }) => {
	// Declare state variables for editing mode and input value
	const [isEditing, setIsEditing] = useState(false);
	const [input, setInput] = useState(content.content);

	// Update the input value when the content prop changes
	useEffect(() => {
		setInput(content.content);
	}, [content.content]);

	// Handle editing the todo item
	const handleEdit = () => {
		editTodo(id, input);
		setIsEditing(false);
	};

	// Render the todo item with its text, delete button, and edit/save button
	return (
		<TodoContainer>
			{isEditing ? (
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			) : (
				<TodoText onClick={() => toggleTodo(id)}>
					{completed ? <del>{content}</del> : content}
				</TodoText>
			)}
			<Button onClick={() => deleteTodo(id)}>Delete</Button>
			{isEditing ? (
				<Button onClick={handleEdit}>Save</Button>
			) : (
				<Button onClick={() => setIsEditing(true)}>Edit</Button>
			)}
		</TodoContainer>
	);
};

// Map the action creators to the component's props
const mapDispatchToProps = {
	deleteTodo,
	editTodo,
	toggleTodo,
};

// Connect the Todo component to the Redux store
export default connect(null, mapDispatchToProps)(Todo);
