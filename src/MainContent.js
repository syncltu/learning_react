import react from "react";
import reactDom from "react-dom"
import './MainContent.css';
import ToDoItem from "./ToDoItem"

function MainContent(){

    return(
        <main className="to-do-list">
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
        </main>
    )
}
export default MainContent;