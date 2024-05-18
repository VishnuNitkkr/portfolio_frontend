import React from 'react'
import './../src/styles/Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>

<nav className="navbar navbar-expand-lg sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}>Portfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbarlinks">
        <li className="nav-item">
          <Link className="nav-link "  to={'/'} id='about'>HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/about'}>EDUCATION</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link "  to="skills">SKILLS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="projects">PROJECTS</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link "  to="achivements">ACHIVEMENTS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='message' to="message">MESSAGE ME</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>


    </>
  )
}

export default Navbar
