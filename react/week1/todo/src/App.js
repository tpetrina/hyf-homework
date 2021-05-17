import './App.css';
import TodoList from "./toDoList.jsx";

const todoItems = [
  {
    number: 1,
    title: "Washing dishes",
    description: "Puting all the dishes in the dishwasher",
    deadlineDate: {
      day: 30,
      month: 5,
      year: 2021,
    },
  },
  {
    number: 2,
    title: "Pay bills",
    description: "Pay bills for Internet",
    deadlineDate: {
      day: 14,
      month: 5,
      year: 2021,
    },
  },
  {
    number: 3,
    title: "Write a plan for the trip",
    description: "Write a plan for visiting all the attractions",
    deadlineDate: {
      day: 10,
      month: 6,
      year: 2021,
    },
  },
  {
    number: 4,
    title: "Doing homeworks",
    description: "Do the HW for React week1",
    deadlineDate: {
      day: 21,
      month: 5,
      year: 2021,
    },
  }
];

function App() {
  return (
    <div className="App">
      <TodoList todos={todoItems} />
    </div>
  );
}

export default App;
