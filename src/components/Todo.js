import React from "react";

export default function Todo(props) {
    const { todo, removeTodo, updateTodo } = props;

    const handleUpdate = () => {
        updateTodo();
    };

    const handleRemove = () => {
        removeTodo();
    };

    return (
        <div>
            <div>{todo}</div>
            <button onClick={handleRemove}>Remove</button>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}
