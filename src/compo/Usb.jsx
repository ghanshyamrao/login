import React,{ useState, useEffect} from 'react'
import {getDeviceList} from 'usb'

export default function Usb() {

    const [Usb,setUsb] = useState([])

    const usblist = getDeviceList()

    for(const usblists of usblist){
        console.log(usblists)
        Usb.push(usblists)
    }




  return (
    <div>{Usb}</div>
  )
}
