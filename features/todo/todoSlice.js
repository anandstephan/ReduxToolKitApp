import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"hello World",isUpdate:false}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action) =>{
            const todo = {
                id:nanoid(),
                text:action.payload,
                isUpdate:false
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action) =>{
           state.todos =  state.todos.filter(todo => todo.id !== action.payload)
        },
        changeUpdateStatus:(state,action) =>{
            state.todos = state.todos.map(item => {
                if(item.id === action.payload){
                    item.isUpdate = true
                }
                return item
            })
        },
        finalUpdate:(state,action) =>{
            state.todos = state.todos.map(item => {
                if(item.id===action.payload.id){
                    
                    item.isUpdate = false
                    item.text = action.payload.todo
                }
                return item
            })
        }
    }
})

export const {addTodo,removeTodo,changeUpdateStatus,finalUpdate} = todoSlice.actions
export default todoSlice.reducer