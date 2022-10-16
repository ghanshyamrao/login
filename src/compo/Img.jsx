import React from 'react'
import './css/Img.css'

export default function Img({Image}) {
  return (
    <div className="img">
         <li><img src={Image} alt="" /></li>
    </div>
  )
}
