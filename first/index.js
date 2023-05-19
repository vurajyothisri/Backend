const express=require('express')
const fromat=require('date-format')
const app=express()
const PORT=4000 || process.env.PORT
app.get("/",(req,res)=>{
    res.status(200).send("<h1>I think i getting it,you have to work for it</h1>");
    
})

  app.get("/api/v1/instagram",(req,res)=>{
    const instaSocial={
        username:"jyothi",
        followers:70,
        follows:123,
        date:fromat.asString("dd[MM]-hh:mm:ss",new Date())
    }
    res.status(200).json({instaSocial})
})
app.get("/api/v1/facebook",(req,res)=>{
    const instaSocial={
        username:"jyothi",
        followers:0,
        follows:3,
        date:fromat.asString("dd-MM-yy",new Date())
    }
    res.status(200).json({instaSocial})
})
app.get("/api/v1/linkedin",(req,res)=>{
    const instaSocial={
        username:"jyothi",
        followers:10,
        follows:13,
        date:fromat.asString("MM-dd-yy",new Date())
    }
    res.status(200).json({instaSocial})
})
app.get("/api/v1/:id",(req,res)=>{
    console.log(req.params.id);
    res.status(200).json({param:req.params.id})
})

app.listen(PORT,()=>{
    console.log(`server run at ${PORT}`)
})