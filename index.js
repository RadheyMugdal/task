const express=require('express')
const data=require('./data.js')
const cors=require('cors')

express()
    .use(cors(
        {
            origin:'*',
            methods:'GET,POST,PUT,DELETE,OPTIONS',
            allowedHeaders:['Content-Type','Authorization','X-Requested-With']
        }
    ))
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