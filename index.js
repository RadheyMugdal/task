const express=require('express')
const data=require('./data.js')


const app=express()

app.get('/',(req,res)=>{
    res.send(data)
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})