const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema ({
    isbn: {
        type: String,
        required: true
    },
    pid: {
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