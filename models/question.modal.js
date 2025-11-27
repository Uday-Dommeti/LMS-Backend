const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    category:String,
    question:String,
    options:Array,
    correctOptions:Array,
    tags:Array,
    difficulty:String
})

const question = mongoose.model("question",questionSchema);

module.exports = question;

