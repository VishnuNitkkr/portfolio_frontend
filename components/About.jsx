import React from 'react'
import './../src/styles/About.css'
const About = () => {
  return (
    <>
    <div id="about">
    <center ><h1 className="heading"><span className='education'>Education</span></h1></center>
    <section className="about" >
    
    
    <div className="about-img">
        <img src="/about.png" alt="About" />
      </div>
      <div className="about-content">
       
       <center>
       <h1 style={{color:'aquamarine',fontWeight:'bold'}}>Academic Records</h1>
       <p style={{fontWeight:'bold',fontSize:"1.3rem"}}>An undergraduate at National Institute of Technology, Kurukshetra, pursuing my major in Electronics And Communication.</p></center>
        
      <center> <table className="table table-dark ">
       
       <thead >
         <tr className='table-heading'>
           <th scope="col">Sr. No.</th>
           <th scope="col">Class/Year</th>
           <th scope="col">School/Institute</th>
           <th scope="col">Marks/CGPA</th>
           <th scope="col">Completed</th>
         </tr>
       </thead>
       <tbody className='table-heading'>
         <tr>
           <th  scope="row">1</th>
           <td>3rd Year</td>
           <td>NIT Kurukshetra</td>
           <td>8.18</td>
           <td>2024</td>
         </tr>
         <tr>
           <th scope="row">2</th>
           <td>12th</td>
           <td>GSSS Khoor</td>
           <td>94.40%</td>
           <td>2020</td>
         </tr>
         <tr>
           <th scope="row">3</th>
           <td>10th</td>
           <td>GSSS Khoor</td>
           <td>93.17%</td>
           <td>2018</td>
         </tr>
       </tbody>
     </table>
     </center>


       <center> <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Read More...
  </button>
  <div class="dropdown-menu" style={{fontWeight:'bold',fontSize:"1.5rem"}}>
  I'm Vishnu Kumar , an undergraduate at National Institute of Technology, Kurukshetra, pursuing my major in Electronics And Communication.
I am a consistent learner and an enthusiastic programmer having good knowledge of some basic languages like C, C++,Python. I like to work on my problem-solving skills by doing competitive programming . 
Beside I am a keen web developer with good academic records. As a passionate developer, I focus on driving innovative outcomes by getting involved in diverse communities with an emphasis on clean and maintainable code.
  </div>
</div></center>

      </div>
    </section>
    </div>
      
    </>
  )
}

export default About
