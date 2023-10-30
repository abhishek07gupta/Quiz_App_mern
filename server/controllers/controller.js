export async function getQuestions(req,res){
    res.json('questions from api');
}

export async function insertQuestions(req,res){
    res.json('question post api')
}

export async function dropQuestions(req,res){
    res.json('question delete api');
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