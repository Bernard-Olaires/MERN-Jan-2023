const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



const albums = [
    {id: 1, albumName:'Blue Slide Park', artist:'Mac Miller'},
    {id: 2, albumName:'Her Loss', artist:'Drake & 21 Savage'}
]

app.get('/api/allAlbums', (request, response) =>{
    response.json(albums)
})

app.get('/api/oneAlbum/:id', (request, response) => {
    console.log(typeof(request.params.id));
    let id = request.params.id
    let album = albums.filter((album) => album.id == id)
    response.json(album)
})

app.post('/api/newAlbum', (request, response) => {
    console.log(request.body);
    albums.push(request.body)
    // Send the request.body to the DB
    response.json(albums)
})

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

