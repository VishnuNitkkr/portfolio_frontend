
import './App.css'
import Navbar from './../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Achive from '../components/Achive.jsx';
import Message from '../components/Message.jsx';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <>

      <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Hero/>}/>
      
     
      
      <Route path='/about' element={<About/>}/>
      
     
      <Route path='/skills' element={<Skills/>}/>
      
     
      <Route path='/projects' element={<Projects/>}/>
      
      
      <Route path='/achivements' element={<Achive/>}/>
      
      
      <Route path='/message' element={<Message/>}/>
     
      </Routes>
      <ToastContainer position='top-center' />
      </Router>
      
    </>
  )
}

export default App
