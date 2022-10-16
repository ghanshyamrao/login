import React from 'react'
import imga from './css/img/5.jpg'
import img1 from './css/img/4.jpg'
import img2 from './css/img/5.jpg'

import './css/Header.css'
import Img from './Img'

export default function Header() {
  return (
    <>
    <div className="img">
      
    <div className="header">
        <Img Image={img1}/> 
        <Img Image={img1}/> 
        <Img Image={img1}/> 
    </div>
    </div>
    </>
    
  )
}
