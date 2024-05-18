import React from 'react'
import './../src/styles/Skills.css'
const Achive = () => {
  return (
    <>
      <div className="achive">
        <center><h1 className="skills-page">Achivements</h1></center>
        <div className="achivements">
        <div className="title">
        <span><h2>Published A Paper : </h2></span>
        </div>
        <div className="content">
        Our paper titled “Challenges and Application of IoT Communication in 5G Networks” with the paper ID 138, authored by Vishnu kumar, Muskan Duwesh and Dr. Chhagan Charan, (Assistant Professor, ECE Deptt.); has been accepted and presented for the “International Conference of Machine Learning and Big Data Analytics” on 9 May, 2024.
        <center> <a href="/Certificate_conference.jpg" className='btn' download={'Conference Certificate'}>Certificate of Paper</a><a href="/Vishnu_ApplicationAndChallengesOf5GIoT.pdf" className='btn' download={"Vishnu's Paper"}>My Paper</a> </center>
        </div>
        <div className="title">
        <span><h2>Member of Different Clubs : </h2></span>
        </div>
        <div className="content">
        Active Member of different cultural and technical clubs and societies like Shiksha, Anamika and EMR.
        </div>
        </div>
        
      </div>
    </>
  )
}

export default Achive
