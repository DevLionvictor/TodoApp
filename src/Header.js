import React from 'react';
import ReactDOM from 'react-dom/client';

function Header({setAboutT}){
    const setAbout = () =>{
        setAboutT(1);
        
    }
    return (
        <div className="nav flex spaced-between">
           <h3>Todo App</h3>
           <div class="menu">
               <span class="pointer" onClick={setAbout}>About</span>
           </div>
        </div>
    )
}
export default Header;