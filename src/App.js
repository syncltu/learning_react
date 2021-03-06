import react from "react";
import reactDom from "react-dom"


import logo from './logo.svg';
//import './App.css';
import Footer from "./Footer.js";
import NavBar from "./Navbar.js";
import MainContent from "./MainContent.js";
import Joke from "./Joke.js"
import "./styles/Joke.css"
import todoData from "./todosData.js"
import ToDoItem from "./ToDoItem.js"
import "./MainContent.css";

function App() {
  const todoItems= todoData.map(todoDataDto=>{
    return (
          <ToDoItem
            key={todoDataDto.id}
            item={todoDataDto}
          />
      );
    }
  ) 
  
  return (
    <div className="ToDoList">
      {todoItems}
    </div>

  )

}
export default App;
