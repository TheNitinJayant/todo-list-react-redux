import React, { useState } from "react";

export default function NewTodo() {
    const [todo, setToDo] = useState(null);

    const handleChange = (event) => {
        setToDo(event.target.value);
    };

    const handleClick = (event) => {};

    return (
        <div>
            <input
                type="text"
                onChange={handleChange}
                value={todo}
                name="todo"
            />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}
