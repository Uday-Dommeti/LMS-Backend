const question = require("../models/question.modal")

const addQuestion = async (req, res) => {
    try {
        const newQuestion = new question(req.body);
        let addedQuestion = await newQuestion.save();
        if (!addedQuestion) {
            res.json({ message: "Question not added" });
        }
        res.json({ message: "Question Added Successfully" })
    }
    catch (error){
        res.json({message:"Error in adding Question",error});
    }
}

module.exports = {addQuestion};