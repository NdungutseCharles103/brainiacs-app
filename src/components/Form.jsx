import React from 'react';

const Form = () => {
    const inputTextHandler = (e) => {
        console.log("ferfre");
    };
    return (
     <form>
       <input onChange={inputTextHandler} type="text" className='todo-input' />
       <button className='todo-button' type='submit'>
         <i class="fa fa-plus-square"></i>
       </button>
       <div className="select">
         <select name="todos" id="" className="filter-todo">
           <option value="all">All</option>
           <option value="Completed">Completed</option>
           <option value="Uncompleted">Uncompleted</option>
         </select>
       </div>

     </form>
    );
} 
export default Form;