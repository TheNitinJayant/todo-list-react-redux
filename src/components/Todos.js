import React from "react";
import Todo from "./Todo";

import { useSelector, useDispatch } from "react-redux";
import { List } from "@mui/material";

export default function Todos(props) {

    // const todos = [{id: "1", todo: "first"}];
    

    const todos = useSelector((state)=>{
        return state.todo.todos;
    });


    const render = () =>
        todos.map((todoObject) => (
            <Todo todoObject={todoObject} />
        ));

    return <List>{render()}</List>;
}
