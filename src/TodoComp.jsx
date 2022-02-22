import React from "react";

const TodoComp = ({text, todo,  todos, setTodos}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fa fa-check"></i>
      </button> 
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoComp;
