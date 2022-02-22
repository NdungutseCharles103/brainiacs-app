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
    //use effect
    useEffect(() => {
        filterHandler();
    }, [todos, status]);
    //function
    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted': 
            setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;    
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
              setStatus={setStatus}/>
            <TodoApp todos={todos} setTodos={setTodos} />
        </div>
    )
} 

export default App;
