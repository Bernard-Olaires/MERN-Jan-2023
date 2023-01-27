import './App.css';

function App() {

  fetch('https://swapi.dev/api/people/')
    .then((res) => res.json())
    .then((res) => console.log(res.results))
    .catch((err) => console.log(err))

  return (
    <div className="App">
    </div>
  );
}

export default App;
