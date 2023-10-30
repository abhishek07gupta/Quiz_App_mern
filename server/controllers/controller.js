import  Questions  from "../models/questionSchema.js";
import result from "../models/resultSchema.js"
import questions,{answers} from '../database/data.js'


export async function getQuestions(req,res){
    try{
        const q= await Questions.find()
        res.json(q)
    }catch(error){
        res.json({error})
    }
}

export async function insertQuestions(req,res){
    try{
        await Questions.insertMany({ questions,answers})
        res.json({msg:"data saved success"})
    }catch(error){
        res.json({ error })
    }
}

export async function dropQuestions(req,res){
    try{
        await Questions.deleteMany()
        res.json({msg:"data delete success"})
    }catch(error){
        res.json({ error })
    }
}



export async function getResult(req,res){
    res.json('result from api')
}

export async function storeResult(req,res){
    res.json('add result from api');
}

export async function dropResult(req,res){
    res.json('drop result from api');
}