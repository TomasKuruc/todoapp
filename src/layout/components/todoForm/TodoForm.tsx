import React from 'react';
import TodoInput from "layout/components/todoForm/components/TodoInput";
import {Box} from "@mui/material";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "redux/store";
import {addTodo} from "redux/todoSlice";
import {generateRandomID} from "utils/getRandomID";
import {handleAlertMessage} from "utils/handleAlertMessage";

interface Props {}

const TodoForm = (props: Props) => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useAppDispatch();

    const createTodo = (data: any) => {
        dispatch(addTodo({
            id: generateRandomID(),
            title: data.title,
            complete: false
        }));

        reset();
        handleAlertMessage("success", "Todo added successfully!", dispatch);
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(createTodo)}
        >
            <TodoInput register={register}/>
        </Box>
    );
};

export default TodoForm;