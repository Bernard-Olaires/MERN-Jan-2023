import './App.css';
import AlbumForm from './components/AlbumForm';
import {useState} from 'react'
import DisplayAlbum from './components/DisplayAlbum';

function App() {

  const [albumList, setAlbumList] = useState([])


  return (
    <div className="App">
      <AlbumForm albumList={albumList} setAlbumList={setAlbumList}/>
      <DisplayAlbum albumList={albumList} setAlbumList={setAlbumList}/>
    </div>
  );
}

export default App;
