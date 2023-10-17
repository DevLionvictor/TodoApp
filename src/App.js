import logo from './logo.svg';
import Form from './form'
import Todo from './Todo'
import './Makeup.css';
import Header from './Header';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import About from './about';
import EditForm from './EditForm';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faPen, faTrash)
uuidv4()


function App() {

  const [aboutT, setAboutT] = useState(0);
  
  const [todos, setTodos] = useState([]);
  const addTodo = todo =>{
   setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing:false}])
   console.log(todos);   
  }
  const deleteTodo = id =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ?{...todo, isEditing: !todo.isEditing} : todo))
  }
  
  const editTask =(task, id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }
  const toggleComplete = (id) =>{
        setTodos(todos.map(todo =>todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  return (
  
    <div>
      {aboutT != 0 ? <About setAboutT={setAboutT}/> : '' }
      <Header setAboutT={setAboutT}/>
    <div className="body">
    <div className="App">
      <header className="App-header">
        
       
      </header>
      <section>
      
        
        <Form addTodo={addTodo} />
        {todos.map((todo, index) =>
        (
          todo.isEditing == true ? <EditForm task={todo} editTodo={editTask} /> : <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>

        ))}
       
        

      </section>
    </div>
    </div>
    <p className="text-center">Made with love by <a href="https://vincentvictor.website"> Victor Vincent</a></p>
    </div>
  );
}

export default App;
