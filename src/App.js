import React from 'react';
import reactDom from 'react-dom';
import './App.css'; 
import TodoList from './Todo-App/TodoList';

function App() {
  return (
    <div className="todo-app">
      {/* <TodoForm /> */}
      <TodoList />
    </div>
  );
}

export default App;
