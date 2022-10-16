import React, { useState, useEffect } from 'react'
import './css/Register.css'
import img1 from './css/img/3.jpg'
import img2 from './css/img/4.jpg'
import img3 from './css/img/5.jpg'
import Axios from 'axios'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
export default function Register({ title, Register, Login }) {

    const [i0, setImg0] = useState(img1)
    const [i1, setImg1] = useState(img1)
    const [i2, setImg2] = useState(img1)
    // Animation
        useEffect(() => {
            setInterval(() => {
                setImg0(img2);
                setTimeout(() => {
                   setImg0(img1) 
                }, 500);

            }, 2000);
            setInterval(() => {
                setImg1(img2);
                setTimeout(() => {
                   setImg1(img1) 
                },1000);

            }, 2000);
            setInterval(() => {
                setImg2(img2);
                setTimeout(() => {
                   setImg2(img1) 
                }, 1500);

            }, 2000);
        },1000)


    const [username, setUsername] = useState('ghanshyamrao')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirm_password, setconfirm_password] = useState('')
    const [validation_username,setvalidation_username] = useState(<div className="unvalidation"></div>)
    const [validation_email,setvalidation_email] = useState(<div className="unvalidation"></div>)
    const [validation_password,setvalidation_password] = useState(<div className="unvalidation"></div>)
    const [validation_con_password,setvalidation_con_password] = useState(<div className="unvalidation"></div>)

    const reg_username = (event) => {   
        let username = event.target.value
        setUsername(username)
    }

    const reg_email = (event) => {
        let email = event.target.value
        setemail(email)
    }
    const reg_password = (event) => {
        let password = event.target.value
        setpassword(password)
    }
    const reg_confirm_password = (event) => {
        let confirm_password = event.target.value
        setconfirm_password(confirm_password)
    }

    const register_user=() => {


        if(username===''){
           setvalidation_username(<div className="validation"></div>)
        }
        else{
            setvalidation_username(<div className="unvalidation"></div>)
        }
        if(email!=='' && email.includes('@') && email.includes('gmail.com')){
            setvalidation_email(<div className="unvalidation"></div>)
        }else{
            setvalidation_email(<div className="validation"></div>)
        }
        if(password===''){
            setvalidation_password(<div className="validation"></div>)
        }else{
            setvalidation_password(<div className="unvalidation"></div>)
        }
        if(confirm_password===''){
            setvalidation_con_password(<div className="validation"></div>)
        }
        else{
            setvalidation_con_password(<div className="unvalidation"></div>)
        }
        
        if(password === confirm_password && email!=='' && username!=='' && password!=='' && confirm_password!==''){
              
                Axios.post('http://localhost:5000/register',{
                    username: username,
                    email: email,
                    password: password,
                    confirm_password: confirm_password
                }).catch(()=>{
                    alert('Registration seccssfully registered')
                    console.log('succssfully ')
                })
        
                setconfirm_password('')
                setemail('')
                setUsername('')
                setpassword('')
                setvalidation_username(<div className="unvalidation"></div>)
                setvalidation_email(<div className="unvalidation"></div>)
                setvalidation_password(<div className="unvalidation"></div>)
                setvalidation_con_password(<div className="unvalidation"></div>)
            }else{
                setvalidation_con_password(<div className="validation"></div>)
            }
           
                
    }



    return (
        <>


            <div className="body">
                <div className="headline">
                    <img src={i0} alt="" />
                    <img src={i1} alt="" />
                    <img src={i2} alt="" />
                    <h1>{title}</h1>
                </div>
                <div className="container" >

                    <div className="all">
                        <div className="title">
                            <h2 className="login" style={{ color: 'white' }}>{Register}</h2>
                            <Link to="/"><h5 className="sign">{Login}</h5></Link>
                        </div>

                        <div  className="section">
                            <p className="email">Username</p>
                            {validation_username}
                            <input type="text" onChange={reg_username}  value={username}  placeholder='username' />
                            <p className="password">Email </p>
                            {validation_email}
                            <input type="email" onChange={reg_email} value={email} placeholder="example@xyz.com" />
                            <p className="email" >password</p>
                            {validation_password}
                            <input type="password" onChange={reg_password} value={password} placeholder="password " />
                            <p className="password" >Confirm-Password </p>
                            {validation_con_password}
                            <input type="password" onChange={reg_confirm_password} value={confirm_password} placeholder=" Confirm-Password" />
                        </div>

                        <button type="button" onClick={register_user} >{Register}</button>
                    </div>
                </div>
            </div>

        </>
    )
}
