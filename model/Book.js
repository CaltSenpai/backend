const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    isbn:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    no_of_copies: {
        type: Number,
        required:true
    }
    
});


module.exports = mongoose.model("Book",bookSchema);
