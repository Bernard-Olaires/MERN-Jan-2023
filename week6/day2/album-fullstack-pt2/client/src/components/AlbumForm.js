import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const AlbumForm = (props) => {
    const navigate = useNavigate()
    const {allAlbums, setAllAlbums} = props
    const [album, setAlbum] = useState({
        albumName: '',
        artist: '',
        releaseYear: 1900,
        genre: 'Rock',
        explicit: false
    })

    const handleInputChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        if(e.target.name === 'explicit'){
            console.log('HERE');
            setAlbum({...album, explicit: !album.explicit})
        }else{
            setAlbum({...album, [e.target.name]: e.target.value})
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/postAlbum', album)
            .then((res) => {
                setAllAlbums([...allAlbums, res.data])
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='d-flex justify-content-center'>
            <form className='w-25' onSubmit={submitHandler}>
                <label className='form-label'>Album Name:</label>
                <input className='form-control' type="text" onChange={handleInputChange} value={album.albumName} name='albumName'/>

                <label className='form-label' >Artist:</label>
                <input className='form-control' type="text" onChange={handleInputChange} value={album.artist} name='artist'/>

                <label className='form-label'>Release Year:</label>
                <input className='form-control' type="number" onChange={handleInputChange} value={album.releaseYear} name='releaseYear'/>

                <label className='form-label'>Genre:</label>
                <select className="form-select" name="genre" onChange={handleInputChange} value={album.genre}>
                    <option value="Rock">Rock</option>
                    <option value="Alternative">Alternative</option>
                    <option value="Hip-hop/rap">Hip-hop/rap</option>
                    <option value="Pop">Pop</option>
                    <option value="Classical">Classical</option>
                    <option value="Metal">Metal</option>
                    <option value="Blues">Blues</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Country">Country</option>
                    <option value="R&B/Soul">R&B/Soul</option>
                </select>

                <label className='form-label me-3'>Explicit?</label>
                <input className="form-check-input" type="checkbox" name="explicit" onChange={handleInputChange} value={album.explicit}/>
                <br />
                <button className='btn btn-primary'>Post Album</button>
            </form>
        </div>
)}

export default AlbumForm;