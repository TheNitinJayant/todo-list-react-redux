import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo  } from "../store/action/index";

import { Button, ListItem, ListItemText, TextField } from "@mui/material";

export default function Todo(props) {
    const dispatch = useDispatch();

    const { todoObject } = props;
    const todoId = todoObject.id;

    const [ isUpdating, setIsUpdating ] = useState(false);
    const [ todo, setTodo ] = useState(todoObject.todo);
    

    const toggleUpdate = () => {
        setIsUpdating(!isUpdating);
    }

    const handleUpdate = async () => {
        await dispatch(updateTodo(todoId, todo));
        toggleUpdate();
    };

    const handleRemove = () => {
        dispatch(deleteTodo(todoId));
    };

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const render = () => {
        if(!isUpdating){
            return(
                <>
                    <ListItemText>{todo}</ListItemText>
                    <Button sx={{margin: "0.5rem"}} variant="contained" onClick={toggleUpdate}>Edit</Button>
                    <Button sx={{margin: "0.5rem"}} color="error" variant="contained" onClick={handleRemove}>Delete</Button>
                </>
            )
        }
        else{
            return(
                <>
                    <TextField sx={{margin: "1rem", width: "60%"}} onChange={handleChange} value={todo} name="todo" id="outlined-basic" variant="outlined" />
                    <Button sx={{margin: "1rem"}} color="success" variant="contained" onClick={handleUpdate}>Update</Button>
                    <Button sx={{margin: "1rem"}} color="error" variant="contained" onClick={toggleUpdate}>Cancel</Button>
                </>
            )
        }
    }

    return (
        <ListItem>
            {render()}
        </ListItem>
    );
}
