import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function About({setAboutT}){
    const closeAbout = () =>{
        setAboutT(0);
    }
     
    return (
        <div className="model-box">
            <p className="closeBut" onClick={closeAbout}>X</p>
        <div className="about-card model-content">
            <div class="heading flex spaced-between"><h3>About</h3> </div>
            <p>This project was made by <a href="https://vincentvictor.website" target='_blank'> Vincent Victor </a>using reactJs, Icons are from fontawesome.
                <br />
                
                It allows you add and manage tasks you plan to do. You can delete tasks and aswell mark completed tasks.
               <div><a href="https://vincentvictor.website" target='_blank'> <button className="but"> Developers Portfolio</button> </a>  <a href="https://wa.link/n8x6y2"> <button className="but but-blend">Hire Me</button> </a> </div>    

                </p>
          
            </div>
        </div>
    )
}
export default About;