import React, { useState, useEffect } from 'react'
import './css/Login.css'
import img1 from './css/img/3.jpg'
import img2 from './css/img/4.jpg'
import Axios from 'axios'

import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function Login() {

    const [i0, setImg0] = useState(img1)
    const [i1, setImg1] = useState(img1)
    const [i2, setImg2] = useState(img1)

    const [email, setemail] = useState('Enter your email')
    const [password, setPassword] = useState('Enter your password')
    const [count, setCount] = useState(1)
    const [name, setName] = useState('')
    const [ph,setph] = useState('')
    const [ename,setEname] = useState('Login_email')

   

    Axios.get('http://localhost:5000/data').then((response) => {
        console.log(response)
    })

    const onename=()=>{
        setph('Enter your name')
        setEname('Login_email_after')
    }

    

    const loginuser = []

    const ema = ((event) => {

        console.log(event.target.value)
        setemail(event.target.value)
    })
    const nam = ((event) => {
        console.log(event.target.value)
        setName(event.target.value)
    })

    const pass = ((event) => {
        console.log(event.target.value)
        setPassword(event.target.value)
    })


    const click = () => {


        Axios.post('http://localhost:5000/login', {
            name: name,
            email: email,
            password: password
        }).then(() => {
            console.log(email, password);
            console.log('Successfully')
            console.log()
        })

        for (let i = 0; i < 20; i++) {
            let user = localStorage.getItem(`user${i}`)
            if (user === null) {
            }
            else {
                loginuser.push(JSON.parse(user))
            }
        }
        for (let i = 0; i < loginuser.length; i++) {
            const emailuser = (loginuser[i]).email[0]
            if (emailuser === email) {
                alert("user is already registered")
            }
            else { }

        }
        const data = {
            user: count,
            email: [],
            password: []
        }
        console.log()
        data.email.push(email)
        data.password.push(password)
        let a = '@'
        let b = '.com'
        if (email == []) {
            alert('something went wrong')
        }

        else if (email.includes(a) && (email.includes(b)) && password.includes(password.toString())) {

            localStorage.setItem(`user${count}`, JSON.stringify(data))
            alert('your data has been saved')
        }
        else {
            alert(a, 'is required', b)
            alert('password is more then 8 characters less then 16 characters')
        }

        setemail('')
        setPassword('')
        setName('')

        setCount(count + 1)


    }



    // useEffect(() => {
    //     setInterval(() => {
    //         setImg0(img2);
    //         setTimeout(() => {
    //            setImg0(img1) 
    //         }, 500);

    //     }, 2000);
    //     setInterval(() => {
    //         setImg1(img2);
    //         setTimeout(() => {
    //            setImg1(img1) 
    //         },1000);

    //     }, 2000);
    //     setInterval(() => {
    //         setImg2(img2);
    //         setTimeout(() => {
    //            setImg2(img1) 
    //         }, 1500);

    //     }, 2000);
    // },1000)

    return (
        <>

            <div  className="Login_body">
                <div className="Login_headline">
                    <img src={i0} alt="" />
                    <img src={i1} alt="" />
                    <img src={i2} alt="" />
                    <h1>Login to new Era of social media

                    </h1>
                </div>
                <div  className="Login_container">

                    <di className="Login_all">
                        <div className="Login_title">
                            <h2 className="login">Login</h2>
                            <h5 className="sign"><Link to="/Reg">SIGN UP</Link></h5>
                        </div>

                        <div  className="Login_section">
                            <p className={ename}>Enter your name</p>
                            <input type="text" style={{color: 'black'}} onClick={onename} placeholder={ph}  onChange={nam} value={name} />
                            {/* <div className="line"></div> */}
                            {/* <p className="Login_email">Email</p> */}
                            <input type="text"  placeholder="Email" onChange={ema} value={email} />
                            {/* <div className="line"></div> */}
                            {/* <p className="Login_password">password </p> */}
                            <input type="file"  />
                            {/* <div className="line"></div> */}
                        </div>

                        <button type="Login_button" onClick={click}>Login</button>
                    </di>
                </div>
            </div>
        </>


    )


}