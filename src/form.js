import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Form({addTodo}){
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
        setValue("")
    }
    return (
        <div>
            <form className="todoForm" onSubmit={handleSubmit}>
            <input type="text" name="task" id="task" value={value} placeholder="What is the task for today?" onChange={(e) => 
            setValue(e.target.value)}></input>
            <button>Add Todo</button>
            </form>
        </div>
    )
}
export default Form;