import React from "react";
import './Album.css'

const Album = (props) => {
    // console.log(props)
    return (
        <div className="album">
            <h2>Album Name: {props.albumName}</h2>
            <h3>Artist: {props.artistName}</h3>
            <h3>Release Year: {props.releaseYear}</h3>
            <h3>Records Sold: {props.recordsSold}</h3>
        </div>
    )
}
export default Album;