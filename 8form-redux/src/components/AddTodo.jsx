import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: ""
    })
    const dispatch = useDispatch()

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
        // console.log(input);
        e.preventDefault()
        dispatch(addTodo(input))
        // setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className=" w-3/6 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-white py-1 px-3 mb-7 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter Name..."
                value={input.name}
                name='name'
                onChange={getTodoHandler}
            />
            <input
                type="email"
                className=" w-3/6 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-white py-1 px-3 mb-7 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter Email..."
                value={input.email}
                name='email'
                onChange={getTodoHandler}
            />
            <input
                type="text"
                className=" w-3/6 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-white py-1 px-3 mb-7 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter Phone..."
                value={input.phone}
                name='phone'
                onChange={getTodoHandler}
            />
            <input
                type="text"
                className=" w-3/6 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-white py-1 px-3 mb-7 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter City..."
                value={input.city}
                name='city'
                onChange={getTodoHandler}
            />
            <input
                type="text"
                className=" w-3/6 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-white py-1 px-3 mb-7 leading-8 transition-colors duration-200"
                placeholder="Enter State..."
                value={input.state}
                name='state'
                onChange={getTodoHandler}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-3/6 mb-10"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
