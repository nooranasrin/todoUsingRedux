import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const id = state[state.length - 1] ? state[state.length - 1].id + 1 : 0;
            state.push({id, item: action.payload.item, isDone: false});
        },
        removeItem: (state, action) => {
            return  state.filter(todo => todo.id != action.payload.id);
        },
        toggleStatus: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id);
            todo.isDone = !todo.isDone;
        },
    },
});

export const {addItem, removeItem, toggleStatus} = todoSlice.actions;

export default todoSlice.reducer;
