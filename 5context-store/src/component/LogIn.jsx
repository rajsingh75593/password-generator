import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'


export default function LogIn() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })
    const { setUser } = useContext(UserContext)

    function getData(e) {
        const { name, value } = e.target
        setUserData((old) => {
            return ({
                ...old,
                [name]: value
            })
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newData = {
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            password: userData.password
        }
        setUser((old)=>[...old, newData])
        
    }
    return (
        <>
            <div className="container w-100 m-auto">
                <h2 className='w-100 bg-success mt-1 p-2 text-center text-light rounded'>Login Form</h2>
                <form className='w-75 m-auto' onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" className='form-control mb-3' name='name' value={userData.name} onChange={getData} placeholder='Enter Name' />
                    <label htmlFor="email">Email</label>
                    <input type="text" className=' form-control mb-3' name='email' value={userData.email} onChange={getData} placeholder='Enter Email' />
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className=' form-control mb-3' name='phone' value={userData.phone} onChange={getData} placeholder='Enter Phone' />
                    <label>Password</label>
                    <input type="text" className=' form-control  mb-3' name='password' value={userData.password} onChange={getData} placeholder='Enter Password' />
                    <button type='submit' className='btn text-light bg-success mt-3'>SubmitData</button>
                </form>
            </div>
        </>
    )
}
