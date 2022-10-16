import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Usertable() {
    
    const [user,setUser]= useState([])
    
    
    const getuser = async () => {
        const users = await fetch('http://localhost:5000/data') 
        const data = await users.json()
        setUser(data) 
    }
    getuser()
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>sr.no</th>
                        <th>username</th>
                        <th>email</th>
                        <th>password</th>
                        <th>confirm_password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((userdata) => (
                            <tr key={userdata.id}>
                        <td>{userdata.id}</td>
                        <td>{userdata.name}</td>
                        <td>{userdata.email}</td>
                        <td>{userdata.password}</td>
                        <td>{userdata.confirm_password}</td>
                        
                            </tr>
                        ))

                    }
                </tbody>
            </table>
        </div>
    )
}
