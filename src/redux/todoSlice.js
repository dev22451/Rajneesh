import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: new Date().getTime().toString(),
                name: action.payload.name,
                completed: false
            };
            state.push(newTodo);


        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },

        editTodo: (state, action) => {

            state.map((item) => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name;
                } return null
            });


        }

    }
})

export const { addTodo, toggleComplete, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;