const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

const albumRoutes = require('./routes/album.routes')
albumRoutes(app)

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );