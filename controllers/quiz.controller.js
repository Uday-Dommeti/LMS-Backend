const quiz = require("../models/quiz.modal");


const addNewQuiz = async (req,res) => {
    try{
        const newQuiz = new quiz(req.body);
        const addedQuiz = await newQuiz.save();
        if(!addedQuiz){
            res.json({message:"Quiz not added"});
        }
        else{
            res.json({message:"Quiz added Successfully"});
        }
    }
    catch(error){
        res.json({message:"Error adding QUiz",error});
    }
}

const getAllQuizzes = async (req,res) => {
    try{
        const allQuizzes = await quiz.find();
        if(allQuizzes.length == 0){
            res.json({message:"No quizzes found"});
        }
        else{
            res.json({allQuizzes,message:"Quizzes sent successfully"});
        }
    }
    catch(error){
        res.json({message:"Error sending quizzes",error});
    }
}

const getQuizById = async (req,res) => {
    try{
        const quizById = await quiz.findById(req.params.Id);
        if(quizById.length == 0){
            res.json({message:"No quiz found"});
        }
        else{
            res.json({requestedQuiz:quizById,message:"Quiz sent successfully"});
        }
    }
    catch(error){
        res.json({message:"Error sending requested quiz",error});
    }
}

const editQuizById = async (req,res) => {
    try{
        // console.log(req.params.Id)
        const editedQuiz = await quiz.findByIdAndUpdate(req.params.Id,req.body);
        if(!editedQuiz){
            res.json({message:"Quiz not updated"});
        }
        else{
            res.json({message:"Quiz updated successfully",editedQuiz});
        }
    }
    catch(error){
        // console.log(error);
        res.json({message:"Error editing quiz",error});
    }
}

const deleteQuizById = async (req,res) => {
    try{
        const deletedQuiz = await quiz.findByIdAndDelete(req.params.Id);
        if(!deletedQuiz){
            res.json({message:"Quiz not deleted"});
        }
        else{
            res.json({message:"Quiz deleted successfully",deletedQuiz});
        }
    }
    catch(error){
        res.json({message:"Error deleting quiz",error});
    }
}

module.exports = {addNewQuiz,getAllQuizzes,editQuizById,getQuizById,deleteQuizById};