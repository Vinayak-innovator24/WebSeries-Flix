require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;

const movieRoutes = require("./routes/movie");

const app = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use("/api/movies/", movieRoutes);

app.listen(port, (req, res) => {
    console.log(`Server connected to port ${port}`);
})