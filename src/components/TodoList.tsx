import { FC } from "react";
import { ITodo } from "./TodoType";

interface TodoListProps{
    todos:ITodo[]
}

const TodoList:FC<TodoListProps> = ({todos}) => {
    return (
        <div style={{border:'4px solid black'}}>
            {todos.map((todo)=>
            <div style={{border:'4px solid black'}}>
                <input style={{width:30,height:30}} type="checkbox" checked={todo.completed} />
                <h1>{todo.title}</h1>
                <p>{todo.id}</p>
            </div>)}
        </div>
    )
}

export default TodoList