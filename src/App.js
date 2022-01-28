import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [counter, setCounter] = useState(0);

    function increaseCount() {
        setCounter((counter + 1) % 10);
    }

    return (
        <div className="App">
            <div>{`La cuenta es ${counter}`}</div>
            <button onClick={increaseCount}>Incrementar</button>
        </div>
    );
}

export default App;
