import React, { useState, useEffect } from 'react';
import axios from 'axios'
const DisplayAllAlbums = (props) => {
    const [allAlbums, setAllAlbums] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/allAlbums')
            .then((allAlbums) => {
                // console.log(allAlbums.data);
                setAllAlbums(allAlbums.data)
            })
            .catch((err) => {
                console.log(err);
            })
    })

    return (
        <div>
            <h2>Check out our album collection</h2>
            {
                allAlbums.map((album) => (
                    <div className='border border-success'>p
                        <p>Album Name: {album.albumName}</p>
                        <p>Artist: {album.artist}</p>
                        <p>Release Year: {album.releaseYear}</p>
                        {
                            album.explicit?
                            <p>Explicit: Yes</p>:
                            <p>Explicit: No</p>
                        }

                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAllAlbums;