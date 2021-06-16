import './App.css';
import TodoList from "./components/TodoList";
import React, { useState, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import Header from "./components/Header"

const API_URL = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function App() {
  const [todos, setTodos] = useState("");

 useEffect(()=>{
   fetch(API_URL)
   .then((response)=>response.json())
   .then((todoListData)=>{
     setTodos(todoListData);
    })
  }, []);
  console.log(todos);
  return (
    <div>
    <Header/>
    <Container className="App" style={{  boxshadow: "0 0 10px black"}}>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </Container>
    </div>
  );
}

export default App;