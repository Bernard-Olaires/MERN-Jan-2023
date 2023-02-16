import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import DisplayAllAlbums from './components/DisplayAllAlbums';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import AlbumForm from './components/AlbumForm';
import OneAlbum from './components/OneAlbum';

function App() {
  const [allAlbums, setAllAlbums] = useState([])
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<DisplayAllAlbums allAlbums={allAlbums} setAllAlbums={setAllAlbums}/>}/>
        <Route path='/newAlbum/form' element={<AlbumForm allAlbums={allAlbums} setAllAlbums={setAllAlbums}/>}/>
        <Route path='/oneAlbum/:id' element={<OneAlbum/>}/>
      </Routes>
    </div>
  );
}

export default App;
