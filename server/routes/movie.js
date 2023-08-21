require("dotenv").config();

const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.post("/", async (req, res) => {
    const { ImgLink, text, title, pageLink } = req.body;
    try {
        const savedMovie = await Movie.create({ ImgLink: ImgLink, text: text, title: title, pageLink: pageLink });
        res.status(200).json(savedMovie);
    } catch (err){
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const allData = await Movie.find(); //can also use ({})
        res.status(200).json(allData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const Data = await Movie.findById(req.params.id);
        if (Data) {
            res.status(200).json(Data);
        } else {
        res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred' });
    }
});

router.put("/:id", async (req, res) => {
    const movieId = req.params.id;
    console.log(movieId);
    const { ImgLink, text, title, pageLink } = req.body;
    console.log(ImgLink, text, + " ", title, + " ", pageLink + " ");
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            movieId,
            {
                ImgLink,
                text,
                title,
                pageLink,
            },
            { new: true } // Return the updated document
        );

        if (updatedMovie) {
        res.json(updatedMovie);
        } else {
        res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred' });
    }
});

router.delete("/:id", async (req, res) => {
    const movieId = req.params.id;
    try {
        const deletedMovie = await Movie.findByIdAndRemove(movieId);
        if (deletedMovie) {
            res.status(200).json({ message: 'Movie deleted successfully' });
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'An error occured' });
    }
});

module.exports = router;