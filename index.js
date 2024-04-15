const express=require('express')
const data=require('./data.js')
const cors=require('cors')

express()
    .use(cors())
    .use(express.json())
    .get('/',(req,res)=>{
        res.send(data)
    })
    .listen(3000,()=>{
        console.log('server is running on port 3000')
    })

const app=express()

app.get('/',(req,res)=>{
    res.send(data)
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})