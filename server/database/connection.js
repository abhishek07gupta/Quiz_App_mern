import mongoose from "mongoose";

export default async function connect(){
    mongoose.connect("mongodb+srv://abhishek:quizapp@quiz.8zubsvk.mongodb.net/?retryWrites=true&w=majority")
    console.log('db connected');
}