import  Questions  from "../models/questionSchema.js";
import Result from "../models/resultSchema.js"
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
    try{
        const r =await Result.find();
        res.json(r)
    }catch(error){
        res.json({error})
    }
}

export async function storeResult(req,res){
    try{
        const {username,result,attempts,points,achived}=req.body;
        if(!username && !result) throw new Error("data not provided");

        await Result.create({username,result,attempts,points,achived})
        res.json({msg:'result created successfully'})
    }catch(error){
        res.json({error})
    }
}

export async function dropResult(req,res){
    try{
        await Result.deleteMany();
        res.json({msg: 'result deleted successfully'})
    }catch(error){
        res.json({error})
    }
}