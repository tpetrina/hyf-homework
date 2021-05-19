import React from 'react';

function Checkbox() {
    return (
        <div>
            <input type="checkbox" />
        </div>
    )
}

function Deadline(props) {
    const deadline = new Date(props.date.year, props.date.month - 1, props.date.day);
    const today = new Date();
    const status = deadline > today ? "valid" : "expired";
    return (
        <div>
            <p>Deadline date: {props.date.day}/ {props.date.month}/ {props.date.year}</p>
            <p>Status : {status}</p>
        </div>
    );
}

function ToDoItem(props) {
    return (
        <li>
            <h2>{props.todo.number}- {props.todo.title} <Checkbox/> </h2><br />
            <div>Description : {props.todo.description}</div><br />
            <div><Deadline date={props.todo.deadlineDate}></Deadline></div>
        </li>
    );
}

function TodoList(props) {
    return (
        <ul>
            <h1>Todo List</h1>
            {props.todos.map((todo) => {
                return (
                    <ToDoItem key={todo.number} todo={todo} />
                )
            })}
        </ul>
    );
}

export default TodoList;