import React from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import LinkTab from "layout/components/navigation/components/LinkTab";
import {useAppSelector} from "redux/store";

interface Props {}

const Navigation = (props: Props) => {
    const todos = useAppSelector(state => state.todos.all);
    const todosRemains = todos.filter(todo => !todo.complete).length;

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs value={false} aria-label="nav tabs example">
                <Tab
                    component="span"
                    label={`${todosRemains} todos remains`}
                />
                <LinkTab label="All" href="/" />
                <LinkTab label="Completed" href="/completed-todos" />
            </Tabs>
        </Box>
    );
};

export default Navigation;