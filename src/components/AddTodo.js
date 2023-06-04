// src/components/AddTodo.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import styled from 'styled-components';

// Style the form container
const FormContainer = styled.div`
	display: flex;
	justify-content: center;
`;

// Style the form
const Form = styled.form`
	display: flex;
	align-items: center;
	margin-top: 20px;
`;

// Style the input field
const Input = styled.input`
	font-size: 16px;
	padding: 5px 10px;
	border: 1px solid #ccc;
`;

// Style the button
const Button = styled.button`
	background-color: #00c1f3;
	border: none;
	border-radius: 3px;
	color: #fff;
	cursor: pointer;
	font-size: 16px;
	margin-left: 5px;
	padding: 5px 10px;
	&:hover {
		background-color: #555;
	}
`;

// The AddTodo functional component
const AddTodo = ({ addTodo }) => {
	// Declare a state variable to store the input value
	const [input, setInput] = useState('');

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// Check if input is not empty
		if (!input.trim()) {
			return;
		}
		// Dispatch the addTodo action with the input value
		addTodo({ content: input });
		// Clear the input field
		setInput('');
	};

	// Render the styled form container, form, input field, and button
	return (
		<FormContainer>
			<Form onSubmit={handleSubmit}>
				<Input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<Button type="submit">Add Todo</Button>
			</Form>
		</FormContainer>
	);
};

// Map the addTodo action creator to the component's props
const mapDispatchToProps = {
	addTodo,
};

// Connect the AddTodo component to the Redux store
export default connect(null, mapDispatchToProps)(AddTodo);
