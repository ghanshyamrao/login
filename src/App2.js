import React,{useEffect,useState} from 'react'
import { About, Contact, Register, Admin, Login ,Slider,User} from './compo';

import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {  
  const H = 'Register and Jump into Ocean of social media'
  const R = 'Sign'
  const L = 'Login'  
  return (
    <>   
      <Router>       
        <Routes>         
          {/* <Route path="/" element={<Slider/>} /> */}
          <Route path="/" element={<Login title={H} Register={R} Login={L}/>} />
          <Route path="/Reg" element={<Register title={H} Register={R} Login={R}/>} />
          <Route path ="/user" element={<User/>}/> 
        </Routes>
      </Router>
    </>
  )
}
export default App