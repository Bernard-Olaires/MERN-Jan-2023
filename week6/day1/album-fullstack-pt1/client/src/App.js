import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import DisplayAllAlbums from './components/DisplayAllAlbums';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import AlbumForm from './components/AlbumForm';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<DisplayAllAlbums/>}/>
        <Route path='/newAlbum/form' element={<AlbumForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
