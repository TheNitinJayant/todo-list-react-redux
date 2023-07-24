import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/action/index";

export default function NewTodo() {
    const [todo, setToDo] = useState(null);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setToDo(event.target.value);
    };

    const handleAdd = (event) => {
        if(todo){
            dispatch(addTodo(todo));
        }
    };

    return (
        <Box sx={{display:"flex", justifyContent:"center", alignItems: "center"}}>
            <TextField sx={{margin: "1rem", width: "60%"}} onChange={handleChange} value={todo} name="todo" id="outlined-basic" label="New Todo" variant="outlined" />
            <Button sx={{margin: "1rem"}} color="success" variant="contained" onClick={handleAdd}>Add</Button>
        </Box>
    );
}
