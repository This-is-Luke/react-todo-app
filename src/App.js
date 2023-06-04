// src/App.js
import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import styled from 'styled-components';
import TodoText from './components/TodoText';

// Style the main container for the application
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`;

// The main App functional component
function App() {
  // Render the main container with the TodoText, AddTodo, and TodoList components
  return (
    <MainContainer>
      <TodoText />
      <AddTodo />
      <TodoList />
    </MainContainer>
  );
}

export default App;
