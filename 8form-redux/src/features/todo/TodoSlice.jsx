
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        // {
        //     // id: 1,
        //     // name: "",
        //     // email: "",
        //     // phone: "",
        //     // city: "",
        //     // state: "",
        // }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone,
                city: action.payload.city,
                state: action.payload.state
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
    }
})



export const { addTodo, removeTodo } = todoSlice.actions

export const todoreducer = todoSlice.reducer











