import React from 'react'

import './../src/styles/Skills.css'
const Skills = () => {
  return (
    <>
      <div className='s-page' id='skills' >
        <center><h1 className="skills-page">My Skills</h1></center>
        <div className='skill' >
          <span><h2>Programming Languages : </h2></span>
          <h4> C, C++, Python,  JavaScript</h4>
        </div>
        <div className="skill">
          <span><h2>Client Side Development :</h2></span><h4>HTML, CSS, BootStrap, React, React Native</h4>
        </div>
        <div className="skill">
          <span><h2>Server Side Development :</h2></span><h4>NodeJS, ExpressJS</h4>
        </div>
        <div className="skill">
          <span><h2>DataBase:</h2></span><h4>MongoDB</h4>
        </div>
   
  

      </div>
      

    </>
  )
}

export default Skills
