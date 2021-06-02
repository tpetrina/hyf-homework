import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TodoItem from "./TodoItem"
import moment from 'moment';
import PropTypes from "prop-types";

function TodoList({ todos, setTodos }) {
  const [inputValue, setInputValue]=useState("");
  const [deadline, setDeadline]= useState(null);
  

  const addTodo = () => {
      if (inputValue==="") {
        alert("please input todo description");
      }else if (!deadline) {
        alert("please insert deadline date");
      }else{
        setTodos((prev)=>{
          const newTodo = {
            id: todos.length > 0 ? todos[todos.length-1].id + 1 : 1,
            description: inputValue,
            deadline : moment(deadline).format('YYYY-MM-DD')
          };
          return [...prev, newTodo];
      })
      }
  };

  const onDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos)
  };

  return (
  <Form>
    <InputGroup >
    <span>Todo description</span> 
            <FormControl
              value={inputValue}
              onChange={(event)=>setInputValue(event.target.value)}
              placeholder = "Description"
            />
            <InputGroup.Append>
            <span>deadline</span> 
              <DatePicker
              selected={deadline} 
              onChange={date=>setDeadline(date)}
              dateFormat='yyyy/MM/dd'
              minDate ={new Date()}
              />
              <Button 
              onClick={addTodo}
              >Add todo</Button>
            </InputGroup.Append>
          </InputGroup>
    <br />
    <ul>
      {todos.length > 0 ?
      todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          description={todo.description}
          deadline={todo.deadline}
          onDelete={onDelete}
          todos={todos}
          setInputValue={setInputValue}
        ></TodoItem>
      ))
        : 'No items left'}
    </ul>
  </Form>
);
}

TodoList.propTypes = {
  todos : PropTypes.arrayOf(PropTypes.object),
  setTodos:PropTypes.func
};

export default TodoList;
