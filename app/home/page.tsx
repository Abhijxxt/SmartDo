'use client'

import { useEffect, useState } from "react";
import Todo from "../components/todo";
import Link from "next/link";

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
        // console.log(data); // Log the fetched data directly
    }

    useEffect(() => {getTodos()}, [])

    return (
        <div className="todo-container h-[80vh] max-h-[80vh] min-h-[80vh] flex-col justify-center items-center ">
            <div className="todo-list-container h-[100%] flex flex-col justify-center items-center overflow-y-auto">
                {
                    todos && todos.map((todo : Todo_type) => {
                        return <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} status={todo.status} />
                    })
                }
            </div>
            <div className="add-todo-button-container flex justify-end">
                <Link href="/create-todo"><button className="bg-pink-400 p-4 rounded-full mr-16">Add new todo</button></Link>
            </div>
        </div>
    )
}