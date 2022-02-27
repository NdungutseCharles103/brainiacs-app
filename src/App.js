import React, { useState, useEffect } from 'react';
import "./App.css";
import Form from "./components/Form";
import TodoApp from './ToDo';

function App() {
    
    //state stuff
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    
    useEffect(() => {
        getLocalTodos();
    }, []);
    
    //use effect
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]); 
    //function
    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;
            case 'uncompleted': 
            setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;    
        }
    }

    const saveLocalTodos = () => {
            localStorage.setItem("todos", JSON.stringify(todos));
    
    }
    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        }else{
          let localTodo =  JSON.parse(localStorage.getItem("todos"));
          setTodos(localTodo);
        }
    }

    return(
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form inputText={inputText}
             todos={todos} setTodos={setTodos}
              setInputText={setInputText}
              setStatus={setStatus}
              />
            <TodoApp filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
        </div>
    )
} 

export default App;
