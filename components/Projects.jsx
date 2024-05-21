import React from 'react'
import Card from './Card.jsx'
import './../src/styles/Card.css'
const Projects = () => {
  return (
    <div className='project-page' id='projects'>
      <center><h1 className='project-heading'>My Projects</h1></center>
      <div className="projects">
        <Card className='card-item' img={'/portfolio.png'} title={'Personal Portfolio Website'} text={'Fully responsive MERN Stack Personal portfolio Web Aplication.'} visit={''}/>
        <Card className='card-item' img={'/blog.png'} title={'Blog Application'} text={'Fully responsive MERN Stack Blog Application for creating blogs. '} visit={'https://blog-app-ten-sandy.vercel.app'}/>
        <Card className='card-item' img={'/job.jpg'} title={'Job Portal Application'} text={'Fully responsive MERN Stack Job Portal Application for creating and finding jobs.'} visit={'https://reactjs-app-for-job.vercel.app'}/>

        <Card className='card-item' img={'/form.jpg'} title={'Simple Registration Form'} text={'Registration form using express.js and mongodb'} visit={'https://registration-page-xi.vercel.app'}/>
        
        
      </div>
    </div>
  )
}

export default Projects
