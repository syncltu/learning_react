import react from "react";
import reactDom from "react-dom"
import "./styles/Joke.css"

function Joke(props){
    const defaultQuestion="Wtf, where is the question ";
    return(
        <div className="Joke">
            <h3>{props.question || defaultQuestion}</h3>
            <p>{props.punchLine}</p>
        </div>
    )
}
export default Joke;