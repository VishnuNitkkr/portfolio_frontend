import React, { useState } from 'react'
import './../src/styles/Message.css'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Message = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [address,setAddress]=useState('');
  const [message,setMessage]=useState('Send Your Message to Vishnu Kumar');
  const navigate=useNavigate()


  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const {data}=await axios.post('https://portfolio-chi-lemon-93.vercel.app/api/v1/message',{name,email,phone,address,message},{withCredentials:true,
      headers:{
        "Content-Type":"application/json"
      }})
     
  

      if(data?.success){
        toast.success(data.message);
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setMessage('');
        navigate('/')
        

      }

    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <>
      <div className="message" id='message'>
       <center><h1 className="message-page">Contect Me!</h1></center>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" placeholder='Your Full Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder='Your Email'   value={email} onChange={(e)=>setEmail(e.target.value)}/>
            

          </div>
          <div className="input-box">
            
            <input type="text" placeholder='Your Mobile Number' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <input type="text" placeholder='Your Address' value={address} onChange={(e)=>setAddress(e.target.value)}/>

          </div>
          <textarea cols='30' rows='10' placeholder='Your Message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>

          <button className='btn' type='submit'>Send</button>

        </form>
      </div>
    </>
  )
}

export default Message
