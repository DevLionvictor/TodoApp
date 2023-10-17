import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function EditForm({task, editTodo}){
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id)
      
         
       
    }
    return (
    
         <div className="card flex spaced-between">
         
         <form className="todoForm" onSubmit={handleSubmit}>
            <input type="text" name="task" id="task" value={value} placeholder="Update Task" onChange={(e) => 
            setValue(e.target.value)}></input>
            <button className='but-blend'><FontAwesomeIcon icon="check-square" /> Update</button>
            </form>
         
     </div>
    )
}
export default EditForm;