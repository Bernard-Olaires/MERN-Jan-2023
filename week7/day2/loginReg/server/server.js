const express = require("express");
const app = express();
const cors = require('cors') 
require("./config/mongoose.config");
require('dotenv').config();
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));
    
const userRoutes = require("./routes/user.routes");


userRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));