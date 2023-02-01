import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {

  const [people, setPeople] = useState([])
  const [searchInput, setSearchInput] = useState('')

  // useEffect(() => {
  //   axios.get('https://swapi.dev/api/people')
  //     .then((response) => {
  //       console.log(response.data.results);
  //       setPeople(response.data.results)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.get(`https://swapi.dev/api/people/?search=${searchInput}`)
      console.log('TEMPLATE LITERAL', `https://swapi.dev/api/people/?search=${searchInput}`);
      console.log(response);
      setPeople(response.data.results)
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <h1>Beep Boop Beep Beep Boop 👾</h1>

      <form onSubmit={submitHandler}>
        <label htmlFor="search">Search for characters: </label>
        <input type="text" name="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
      </form>
      {

        people.length > 0? 

        people.map((person, idx) => (
          <div key={idx}>
            <h2>{person.name}</h2>
          </div>
        ))
        :
        null
      }
    </div>
  );
}

export default App;
