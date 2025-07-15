'use client'

import { useEffect, useState } from "react";

export default function HomePage() {

    const [todo, setTodo] = useState({});

    const getTodos = async () => {
        const response = await fetch("/api/todo");
        const data = await response.json();
        console.log(data)
    }

    useEffect(() => {getTodos()}, [])

    return (
        <div className="todo-container">
            <div className="todo-list-container">
                {todo && "hello"}
            </div>
            <div className="add-todo-button-container">

            </div>
        </div>
    )
}