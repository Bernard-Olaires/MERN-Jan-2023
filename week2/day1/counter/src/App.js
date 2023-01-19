import './App.css';
import {useState} from 'react'

function App() {
//        Getter, Setter
  const [state, setState] = useState(0)

  const increment = () => {
    // * better way to change state ONLY when what your changing state to is based on the current value of state 
    // * We need to know what state is in order to increase it by one so we use the function version 
    // * this guarantees that React will give us with the most up to date value from state  
    setState(prevState => prevState+1)

    // setState(state+1)
    console.log(state);
  }
  const decrement = () => {
    setState(prevState => prevState-1)
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
