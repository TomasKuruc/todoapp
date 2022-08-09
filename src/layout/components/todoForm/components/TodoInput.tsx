import React, {useRef} from 'react';
import {TextField} from "@mui/material";
import {UseFormRegister} from "react-hook-form/dist/types/form";

interface Props {
    register: UseFormRegister<any>
}

const TodoInput = (props: Props) => {
    return (
        <TextField
            {...props.register('title')}
            id="standard-basic"
            label="Type your todo task..."
            autoFocus={true}
            variant="standard" />
    );
};

export default TodoInput;