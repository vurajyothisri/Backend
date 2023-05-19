const express=require('express')

const app=express()
const PORT=4000 || process.env.PORT
app.get("/",(req,res)=>{
    res.status(200).send("<h1>I think i getting it,you have to work for it</h1>")
})
app.listen(PORT,()=>{
    console.log(`server run at ${PORT}`)
})