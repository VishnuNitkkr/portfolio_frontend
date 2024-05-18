import React from 'react'
import './../src/styles/About.css'
const About = () => {
  return (
    <>
    <center><h1 className="heading"><span className='education'>Education</span></h1></center>
    <section className="about" id="about">
    
    
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


       <center> <a href="#" className='btn'>Read More</a></center>

      </div>
    </section>
      
    </>
  )
}

export default About
