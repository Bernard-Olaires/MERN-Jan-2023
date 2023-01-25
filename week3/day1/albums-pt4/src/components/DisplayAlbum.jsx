import React, {useState} from 'react';
import './DisplayAlbum.css'

const DisplayAlbum = (props) => {
    const {albumList, setAlbumList} = props

    const deleteHandler = (id) => {
        console.log(id)
        let updatedList = albumList.filter((album) => album.id !== id)
        setAlbumList(updatedList)
    }
    return (
        <div className='album-container'>
            {
                albumList.map((album) => (
                    <div key={album.id} className='album'>
                        <p>Album Name: {album.albumName}</p>
                        <p>Band Name: {album.bandName}</p>
                        <p>Release Year: {album.releaseYear}</p>
                        <p>Records Sold: {album.recordsSold}</p>
                        <button onClick={() => deleteHandler(album.id)}>Delete Album</button>
                    </div>
                ))
            }
        </div>
)}

export default DisplayAlbum;