import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
    const { todos, removeTodo, updateTodo } = props;

    const render = () =>
        todos.map((todo) => (
            <Todo removeTodo={removeTodo} updateTodo={updateTodo} todo={todo} />
        ));

    return <div>{render()}</div>;
}
