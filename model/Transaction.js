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
    date: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("Transaction",transactionSchema);
