import { use } from "react";
import Todo from "./Todo";

export default function Todos({todosPromise}){
    const todos = use(todosPromise);
    console.log(todos)
    return (
        <div className="card">
            <h2>All Todos: {todos.length}</h2>
            {todos.map(todo=> <Todo key={todo.id} todo={todo}></Todo>)}
        </div>
    )
}