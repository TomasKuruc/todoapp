import React from 'react';
import {TextareaAutosize} from "@mui/material";

interface Props {}

const TodoTextArea = (props: Props) => {
    return (
        <TextareaAutosize
            maxRows={4}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            defaultValue=""
            style={{
                width: '100%',
                height: '100px',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid rgba(0, 0, 0, 0.47)' }}
        />
    );
};

export default TodoTextArea;