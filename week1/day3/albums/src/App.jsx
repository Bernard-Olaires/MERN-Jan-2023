import './App.css';
import Album from './components/Album';


function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Album 
        albumName={'Blue Slide Park'}
        artistName={'Mac Miller'}
        releaseYear={2012}
        recordsSold={1000000}
      />
      <Album 
        albumName={'Titanic Rising'}
        artistName={'Weyes Blood'}
        releaseYear={2021}
        recordsSold={1000000}
      />
    </div>
  );
}

export default App;
