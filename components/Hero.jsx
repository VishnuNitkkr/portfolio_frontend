import React from 'react'
import { useRef,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin,faGithub,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import Typed from 'typed.js';
import './../src/styles/Hero.css'

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
          <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
          <a href="#"><FontAwesomeIcon icon={faWhatsapp}/></a>
        </div>
        <a href="#" className="btn">Download Resume</a>
        
      </div>

      <div className="home-img">
        <img src="/hero.png" alt="my-image" />
      </div>
    </section>
      
    </>
  )
}

export default Hero
