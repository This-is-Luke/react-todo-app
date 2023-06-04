// reducer.js

// Define the initial state of the Redux store
const initialState = {
	nextId: 1,
	data: {},
};

// The reducer function that handles all dispatched actions and updates the state accordingly
const reducer = (state = initialState, action) => {
	// Use a switch statement to handle different action types
	switch (action.type) {
		// Handle the ADD_TODO action
		case 'ADD_TODO':
			// Get the next ID for the new todo item
			const newId = state.nextId;
			// Return the updated state with the new todo item added to the data object
			return {
				...state,
				nextId: newId + 1,
				data: {
					...state.data,
					[newId]: {
						id: newId,
						content: action.payload.content.content,
						completed: false,
					},
				},
			};
		// Handle the DELETE_TODO action
		case 'DELETE_TODO':
			// Create a copy of the current data object
			const newData = { ...state.data };
			// Remove the todo item with the specified ID
			delete newData[action.payload.id];
			// Return the updated state with the todo item removed from the data object
			return {
				...state,
				data: newData,
			};
		// Handle the EDIT_TODO action
		case 'EDIT_TODO':
			// Update the content of the specified todo item
			return {
				...state,
				data: {
					...state.data,
					[action.payload.id]: {
						...state.data[action.payload.id],
						content: action.payload.content,
					},
				},
			};

		// Handle the TOGGLE_TODO action
		case 'TOGGLE_TODO':
			// Toggle the completed status of the specified todo item
			return {
				...state,
				data: {
					...state.data,
					[action.payload.id]: {
						...state.data[action.payload.id],
						completed: !state.data[action.payload.id].completed,
					},
				},
			};
		// Handle any unrecognized actions by returning the current state
		default:
			return state;
	}
};

// Export the reducer as the default export
export default reducer;
