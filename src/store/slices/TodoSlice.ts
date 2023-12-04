import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TodoSliceType {
    todos: string[];
}

const INITIAL_STATE: TodoSliceType = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: INITIAL_STATE,
    reducers: {
        addAction: (state, action: PayloadAction<string>) => {
            if(action.payload === '') return;
            state.todos.push(action.payload)
        },

        removeAction: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((element, i) => i !== action.payload);
        }
    },
});

export const { addAction, removeAction } = todoSlice.actions;

export default todoSlice.reducer;


