import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Todo({task, deleteTodo, editTodo, toggleComplete}){
  
    const editTask = id =>{
        editTodo(id);
    }
    return (
        <div className="card flex spaced-between">
            <p className={task.completed == true ? 'completed' : 'pending'}  onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div className="actions">
                <span className='pointer' onClick={() => editTask(task.id)}> <FontAwesomeIcon icon="pen" /> </span>
                <span className='pointer'  onClick={() => deleteTodo(task.id)}><FontAwesomeIcon icon="trash" /> </span>
            </div>
        </div>
    )
}
export default Todo;