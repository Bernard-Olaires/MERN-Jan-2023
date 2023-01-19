import React, {useState} from 'react';
import './AlbumForm.css'

const AlbumForm = (props) => {

    // const [albumName, setAlbumName] = useState('')
    // const [bandName, setBandName] = useState('')
    // const handleAlbumNameChange = (e) => {
    //     console.log(e)
    //     console.log(e.target)
    //     console.log(e.target.value)
    //     setAlbumName(e.target.value)
    // }


    const [album, setAlbum] = useState({
        albumName:'',
        bandName:'',
        releaseYear:1900,
        recordsSold:0
    })
    const onChangeHandler = (e) => {
        // setAlbum({...album, [e.target.name]: e.target.value})
        setAlbum(prevState => {return {...prevState, [e.target.name]: e.target.value}})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`New Album: ${JSON.stringify(album)}`)
        // console.log('New Album:' +  album)
    }

    return (
        <>
            <div className='d-flex'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Your Favorite Album</h2>
                    <label htmlFor="albumName">Album Name:</label>
                    <input type="text" name='albumName' onChange={onChangeHandler}/>
                    {/* 
                    This is what we are writing with the ternary operator below 

                    if (album.albumName.length < 3){
                        return 'Album name must be 3 or more characters'
                    }else{
                        return null
                    } 
                    
                    */}
                    
                    {
                        album.albumName.length < 3 ?
                        <p>Album name must be 3 or more characters</p>:
                        null
                    }

                    <label htmlFor="bandName">Band Name:</label>
                    <input type="text" name='bandName' onChange={onChangeHandler}/>

                    {
                        album.bandName.length < 3 ?
                        <p>Band name must be 3 or more characters</p>:
                        null
                    }

                    <label htmlFor="releaseYear">Release Year:</label>
                    <input type="number" name='releaseYear' onChange={onChangeHandler}/>

                    {
                        album.releaseYear < 1900 ?
                        <p>Release year cannot be before 1900</p>:
                        null
                    }

                    <label htmlFor="recordsSolds">Records Sold:</label>
                    <input type="number" name='recordsSold' onChange={onChangeHandler}/>

                    {
                        album.recordsSold < 0 ?
                        <p>Cannot have negative records sales</p>:
                        null
                    }
                    <button>Add Album</button>
                </form>
            </div>
            <h2>{album.albumName}</h2>
            <h2>{album.bandName}</h2>
            <h2>{album.releaseYear}</h2>
            <h2>{album.recordsSold}</h2>
        </>
)}

export default AlbumForm;