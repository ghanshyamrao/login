import React from 'react'
import './css/Section.css'
import Button from './Button.jsx'


export default function Section() {
  return (
    <div  className="section">
        <li className="btn"><Button btname='Home'/></li>
        <li  className="btn"><Button btname='Conatact'/></li>
        <li  className="btn"><Button btname='About'/></li>
        <li  className="btn"><Button btname='More'/> </li>
    </div>
  )
}
