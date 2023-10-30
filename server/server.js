import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'
import router from './router/route.js'
import connect from './database/connection.js'

const app=express()

// middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
config()

const port=process.env.PORT || 8080;


// routes
app.use('/api',router)

app.get('/',(req,res)=>{
    try{
        res.json("get request")
    }catch(error){
        res.json(error)
    }
})

connect().then(()=>{
    try{
        app.listen(port,()=>{
            console.log(`server is running on ${port}`);
        })
    }catch(error){
        console.log('server connection failed')
    }
}).catch(error=>{
    console.log('invalid db connection')
});

