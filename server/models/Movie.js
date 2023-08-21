const mongoose = require("mongoose");
const db = require("../db");

const movieSchema = mongoose.Schema({
    ImgLink: {
        type: String,
        validate: {
            validator: function (v) {
                console.log('Validating:', v);
                return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v);
            },
            message: `Not a valid URL!`
        }
    },
    pageLink: {
        type: String,
        validate: {
            validator: function (v) {
                return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v);
            },
            message: `Not a valid URL!`
        }
    },
    text: { type: String, required: false },
    title: { type: String, required: true },
});

module.exports = db.model('Movie', movieSchema);