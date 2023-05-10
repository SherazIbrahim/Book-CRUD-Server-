const express = require('express');
const bookRoute = require('./Routes/bookRoute.js');
var cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", bookRoute);



app.listen(process.env.PORT,()=> {
    console.log("Listening on port 4000")
});