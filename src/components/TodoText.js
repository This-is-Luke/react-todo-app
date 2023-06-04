//src/components/TodoText.js
// the purpose of this file is to render the main text for the todo app
import React from "react";
import styled from "styled-components";

// Style the main text for the todoText component
const Text = styled.h1`
  color: #00c1f3;
  font-size: 50px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-top: 50px;
`;

// The todoText functional component
const todoText = () => {
  // Render the styled Text component with the content "Todo List"
  return (
    <div>
      <Text>Todo List</Text>
    </div>
  );
};

export default todoText;
