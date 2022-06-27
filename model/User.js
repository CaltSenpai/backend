const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    pid:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    phoneno: {
        type: Number,
        required: false
    }
    
});


module.exports = mongoose.model("User",userSchema);
