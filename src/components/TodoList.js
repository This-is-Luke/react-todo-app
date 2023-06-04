// src/components/TodoList.js
// the purpose of this file is to render a list of Todo components based on the todos prop

import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

// The TodoList functional component
const TodoList = ({ todos }) => {
	// Render a list of Todo components based on the todos prop
	return (
		<div>
			{todos.map((todo) => (
				<Todo key={todo.id} {...todo} />
			))}
		</div>
	);
};

// Map the Redux store state to the component's props
const mapStateToProps = (state) => {
	return {
		// Get the todos from the state and convert the data object into an array
		todos:
			state.todos && state.todos.data ? Object.values(state.todos.data) : [],
	};
};

// Connect the TodoList component to the Redux store
export default connect(mapStateToProps)(TodoList);
