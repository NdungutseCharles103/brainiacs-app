import React from "react";
import TodoComp from "./TodoComp";

import "./App.css";

function todoApp({ todos, setTodos }) {
  return (
    <div className="main-cont">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoComp
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default todoApp;
