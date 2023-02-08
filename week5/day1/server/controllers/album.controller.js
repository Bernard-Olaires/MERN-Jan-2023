const Album = require('../models/album')

module.exports = {
    // Key value pairs 
    // Keys are the names of the functions and values are the functions
    allAlbums: (req,res) => {
        Album.find({})
            .then((allAlbums) => {
                res.json(allAlbums)
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error:err})
            })
    },
    createAlbum: (req, res) => {
        Album.create(req.body)
            .then((newAlbum) => {
                res.json(newAlbum)
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error:err})
            })
    }
}