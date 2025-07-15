'use client'

import { useEffect, useState } from "react";
import Todo from "../components/todo";

enum Status {
    INCOMPLETE,
    COMPLETE
}

type Todo_type = {
    id: number,
    title : string,
    description: string,
    status?: Status,
    createdAt?: Date,
    updatedAt?: Date,
}

export default function HomePage() {

    const [todos, setTodo] = useState([]);

    const getTodos = async () => {
        const response = await fetch("/api/todo");
        const data = await response.json();
        setTodo(data);
        console.log(data); // Log the fetched data directly
    }

    useEffect(() => {getTodos()}, [])

    return (
        <div className="todo-container">
            <div className="todo-list-container">
                {
                    todos && todos.map((todo : Todo_type) => {
                        return <Todo key={todo.id} title={todo.title} description={todo.description} status={todo.status} />
                    })
                }
            </div>
            <div className="add-todo-button-container">

            </div>
        </div>
    )
}