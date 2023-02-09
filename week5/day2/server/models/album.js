const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({

    albumName: String,
    artist: String,
    releaseYear: Number,
    genre: String,
    explicit:Boolean
    
})
const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;