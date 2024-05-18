import React from 'react'
import Card from './Card.jsx'
import './../src/styles/Card.css'
const Projects = () => {
  return (
    <div className='project-page'>
      <center><h1 className='project-heading'>My Projects</h1></center>
      <div className="projects">
        <Card className='card-item' img={'/hero.png'} title={'Job Portal'} text={'web Application for finding jobs'}/>
        <Card title={'Job Portal'} text={'web Application for finding jobs'}/>
        <Card title={'Job Portal'} text={'web Application for finding jobs'}/>
        <Card title={'Job Portal'} text={'web Application for finding jobs'}/>
        <Card title={'Job Portal'} text={'web Application for finding jobs'}/>
        <Card title={'Job Portal'} text={'web Application for finding jobs'}/>
      </div>
    </div>
  )
}

export default Projects
