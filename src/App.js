import React, { useState } from 'react';
import "./App.css";
import Form from "./components/Form";
import TodoApp from './ToDo';

function App() {
    const [inputType, setInputText] = useState("");
    return(
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form/>
            <TodoApp />
        </div>
    )
} 

export default App;
