import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "redux/store";

export interface Todo {
    id: string,
    title: string,
    complete: boolean
}

interface TodosState {
    all: Todo[],
}

const initialState: TodosState = {
    all: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.all.push(action.payload);
        },
        completeTodo: (state, action: PayloadAction<Todo>) => {
            const todoIndex = state.all.findIndex(todo => todo.id === action.payload.id);

            if (todoIndex === -1 || todoIndex === undefined) {
                return;
            }

            state.all[todoIndex] = action.payload;
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.all = state.all.filter(todo => todo.id !== action.payload);
        },
    },
})

export const { addTodo, completeTodo, removeTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todoSlice.reducer;