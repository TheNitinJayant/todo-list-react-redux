import React from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Box, Container, Paper } from "@mui/material";

export default function TodoApp() {
    const defaultTodo = ["Hello", "World", "React", "Redux"];

    const add = () => {};

    const update = () => {};

    const remove = () => {};

    return (
        <div>
            <Container maxWidth="sm">
                <Paper elevation = {3}>
                    <NewTodo />
                    <Todos />
                </Paper>
            </Container>
        </div>
    );
}
