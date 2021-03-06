import React from "react";
import reactDom from "react-dom"
import './styles/ToDoItem.css';

function ToDoItem(props){
    return (
        <div className="ToDoItem">
            <p>{props.item.text}</p>
            <input type="checkbox" checked={props.item.completed}/>
        </div>
    )
}
export default ToDoItem;