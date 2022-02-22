import React, { useState } from 'react';
import "./App.css";
import Form from "./components/Form";
import TodoApp from './ToDo';

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    return(
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form inputText={inputText}
             todos={todos} setTodos={setTodos}
              setInputText={setInputText}/>
            <TodoApp todos={todos} setTodos={setTodos} />
        </div>
    )
} 

export default App;
