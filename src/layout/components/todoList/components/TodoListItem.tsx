import React from 'react';
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import {useAppDispatch} from "redux/store";
import {completeTodo, removeTodo} from "redux/todoSlice";
import {handleAlertMessage} from "utils/handleAlertMessage";

interface Props {
    id: string,
    title: string,
    complete: boolean
}

const TodoListItem = (props: Props) => {
    const dispatch = useAppDispatch();

    const handleCompleteTodo = (): void => {
        const text = !props.complete
            ? "Todo completed successfully!"
            : "Todo changed status from completed to uncompleted successfully!";

        dispatch(completeTodo({...props, complete: !props.complete}))
        handleAlertMessage("success", text, dispatch);
    }

    const handleRemoveTodo = (): void => {
        dispatch(removeTodo(props.id));
        handleAlertMessage("warning", "Todo removed successfully!", dispatch);
    }

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="remove todo" onClick={handleRemoveTodo}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} onClick={handleCompleteTodo} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={props.complete}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText
                    primary={props.title}
                    style={{
                        opacity: props.complete ? '0.5' : '',
                        textDecoration: props.complete ? 'line-through red' : ''
                    }}/>
            </ListItemButton>
        </ListItem>
    );
};

export default TodoListItem;