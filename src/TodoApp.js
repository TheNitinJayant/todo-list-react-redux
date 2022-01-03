import React from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

export default function TodoApp() {
    const defaultTodo = ["Hello", "World", "React", "Redux"];

    const add = () => {};

    const update = () => {};

    const remove = () => {};

    return (
        <div>
            <NewTodo addTodo={add} />
            <Todos
                removeTodo={remove}
                updateTodo={update}
                todos={defaultTodo}
            />
        </div>
    );
}
