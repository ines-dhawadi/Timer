import {  } from "react-bootstrap";
import './App.css';
import Convert from "./components/convert";
import Timer from './components/Timer'

function App() {
  return (
    <div className="App">
      
<Convert />


<Timer  ms={20010000}/>

    </div>
  );
}

export default App;
