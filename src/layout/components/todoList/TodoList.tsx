import React from 'react';
import List from '@mui/material/List';
import TodoListItem from "layout/components/todoList/components/TodoListItem";
import {useAppSelector} from "redux/store";
import {Todo} from "redux/todoSlice";

interface Props {
    completed?: boolean
}

const TodoList = (props: Props) => {
    const todos = useAppSelector(state => state.todos.all);

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {todos.filter(todo => props.completed ? todo.complete : !todo.complete).map((todo: Todo) => (
                <TodoListItem key={todo.id} {...todo}/>
            ))}
        </List>
    );
};

export default TodoList;