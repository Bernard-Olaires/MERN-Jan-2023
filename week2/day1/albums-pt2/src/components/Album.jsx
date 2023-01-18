import React, {useState} from "react";
import './Album.css'

const Album = (props) => {
    
    const [albumSales, setAlbumSales] = useState(props.recordsSold)

    const increaseSales = () => {
        setAlbumSales(albumSales+1)
    }

    return (
        <div className="album">
            <h2>Album Name: {props.albumName}</h2>
            <h3>Artist: {props.artistName}</h3>
            <h3>Release Year: {props.releaseYear}</h3>
            <h3>Records Sold: {albumSales}</h3>
            <button onClick={increaseSales}>Buy this album</button>
        </div>
    )
}
export default Album;