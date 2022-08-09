import React from 'react';
import {Route, Routes} from "react-router";
import TodoList from "layout/components/todoList/TodoList";

interface Props {}

const FrontRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path={'/completed-todos'} element={<TodoList completed/>}/>
            <Route path={'/'} element={<TodoList/>}/>
        </Routes>
    );
};

export default FrontRoutes;