import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../store/slice/MaincategorySlice'

function TodoForm({ data, setData }) {

    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: ""
    })
    const dispatch = useDispatch()

    useEffect(() => {
        if (data) {
            setInput(data)
        }
    }, [data])

    const getTodoHandler = (e) => {
        const { name, value } = e.target
        setInput((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (data) {
            dispatch(updateTodo(input))
            setData('')
        } else {
            dispatch(addTodo(input))
            setInput('')
        }
        setInput({
            name: "",
            email: "",
            phone: "",
            city: "",
            state: ""
        })
    }

    return (
   <div className="container">
   <h4 className='text-center my-2 text-light p-1 bg-success rounded'>Maincategory <span className='text-warning'>Data</span></h4>
     <div className="row">
        <form onSubmit={addTodoHandler} className="form">
            <input className='form-control mb-3' type="text" placeholder="Enter Name..." value={input.name} name='name' onChange={getTodoHandler} />
            <input className='form-control mb-3' type="email" placeholder="Enter Email..." value={input.email} name='email' onChange={getTodoHandler} />
            <input className='form-control mb-3' type="text" placeholder="Enter Phone..." value={input.phone} name='phone' onChange={getTodoHandler} />
            <input className='form-control mb-3' type="text" placeholder="Enter City..." value={input.city} name='city' onChange={getTodoHandler} />
            <input className='form-control mb-3' type="text" placeholder="Enter State..." value={input.state} name='state' onChange={getTodoHandler} />
            <button className='btn btn-success w-100 btn-sm' type="submit" >{data ? " Update Maincategory" : "Add Maincategory"}</button>
        </form>
     </div>
   </div>
    )
}

export default TodoForm
