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

const getQuestions = async (req,res) => {
    try{
        const questions = await question.find();
        if(questions.length == 0){
            res.json({message:"No Questions Found"});
        }
        else{
            res.json({questions,message:"Questions send successfully"});
        }
    }
    catch (error){
        res.json({message:"Error getting Questions",error})
    }
}

const getQuestionById = async (req,res) => {
    try {
        const requestedQuestion = await question.findById(req.params.Id);
        if(!requestedQuestion){
            res.json({message:"No Question Found"});
        }
        else{
            res.json({requestedQuestion,message:"Requested Question sent successfully"});
        }
    }
    catch(error){
        res.json({message:"Error fetching requested question",error});
    }
}

const editQuestionById = async (req,res) => {
    try{
        // console.log(req.body);
        const editedQuestion = await question.findByIdAndUpdate(req.params.Id,req.body);
        if(!editedQuestion){
            res.json({message:"Question not updated"});
        }
        else{
            res.json({message:"Edited question successfully",editedQuestion});
        }
    }
    catch(error){
        res.json({message:"Error editing question",error});
    }
}

const deleteQuestionById = async (req,res) => {
    try{
        const deletedQuestion = await question.findByIdAndDelete(req.params.Id);
        if(!deletedQuestion){
            res.json({message:"Question not deleted"});
        }
        else{
            res.json({message:"Deleted Question Successfully"});
        }
    }
    catch(error){
        res.json({message:"Error deleting Question",error});
    }
}

module.exports = {addQuestion,getQuestions,getQuestionById,editQuestionById,deleteQuestionById};