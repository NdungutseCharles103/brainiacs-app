import React from "react";
import TodoComp from "./TodoComp";


function todoApp({ todos, setTodos, filteredTodos }) {
  return (
    <div className="main-cont">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
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
