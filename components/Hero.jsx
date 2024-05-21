import React from 'react'
import { useRef,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin,faGithub,faTwitter} from '@fortawesome/free-brands-svg-icons'
import Typed from 'typed.js';
import './../src/styles/Hero.css'
import { Link } from 'react-router-dom';

const Hero = () => {
  const el = useRef(null);

  useEffect(()=>{

    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'App Developer','Engineer','Coder'],
      typeSpeed: 100,
      backSpeed:100,
      backDelay:900,
      loop:true
    });

    return () => {
      
      typed.destroy();
    };

  },[])
  return (
    <>
    
    <section className='home' id='home'>
      <div className="home-content">

        <h3>Hello, It's Me</h3>
        <h1><span>Vishnu Kumar</span></h1>
        <h3>And I'm a <span className='skills' ref={el}>Web Developer</span></h3>
        <p>An undergraduate at National Institute of Technology, Kurukshetra, pursuing my major in Electronics And Communication. I am a consistent learner and an enthusiastic programmer having good knowledge of some basic languages like C, C++,Python. </p>

        <div className="social-media">
          <Link to={'https://www.linkedin.com/in/kumarvishnu9802'}><FontAwesomeIcon icon={faLinkedin}/></Link>
          <Link to={'https://github.com/VishnuNitkkr'}><FontAwesomeIcon icon={faGithub}/></Link>
          
          <Link to={'https://x.com/vishnu9802'}><FontAwesomeIcon icon={faTwitter}/></Link>
        </div>
        <a href="/Vishnu's_Resume.pdf" download={"Vishnu's Resume"} className="btn">Download Resume</a>
        
      </div>

      <div className="home-img">
        <img src="/about.png" alt="my-image" />
      </div>
    </section>
      
    </>
  )
}

export default Hero
