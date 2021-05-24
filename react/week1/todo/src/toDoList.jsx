import React from 'react';
import moment from 'moment';

function Checkbox() {
    return (
        <div>
            <input type="checkbox" />
        </div>
    )
}

function ToDoItem(props) {
    const {todo}=props;
    const deadline = new Date(todo.deadlineDate.year, todo.deadlineDate.month - 1, todo.deadlineDate.day);
    return (
        <li>
            <h2>{todo.number}- {todo.title} <Checkbox/> </h2>
            <div>Description : {todo.description}</div>
            <div>Deadline date : {moment(deadline).format('MM/DD/YYYY')}</div>
          <div>Status : {deadline > new Date() ? "valid" : "expired"}</div>
        </li>
    );
}

function TodoList(props) {
    const {todos}=props;
    return (
        <ul>
            <h1>Todo List</h1>
            {todos.map((todo) => {
                return (
                    <ToDoItem key={todo.number} todo={todo} />
                )
            })}
        </ul>
    );
}

export default TodoList;