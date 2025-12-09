const mongoose = require("mongoose")

const quizSchema = mongoose.Schema({
    quizTitle:String,
    quizTags:Array,
    quizQuestions:Array
})

const quiz = mongoose.model("quiz",quizSchema);

module.exports = quiz;