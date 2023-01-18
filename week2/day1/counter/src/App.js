import './App.css';
import {useState} from 'react'

function App() {
//        Getter, Setter
  const [state, setState] = useState(0)

  const increment = () => {
    setState(state+1)
    console.log(state);
  }
  const decrement = () => {
    setState(state-1)
  }

  // const alertButton = () => {
  //   alert('You clicked the button')
  // }
  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span>{state}</span>
      <button onClick={increment}>+</button>
      {/* <button onClick={alertButton}>Click me</button> */}
    </div>
  );
}

export default App;
