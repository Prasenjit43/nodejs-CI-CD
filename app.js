const express = require('express')
const app= express()

app.use(express.json())

app.get("/",(req,resp) =>{
    resp.json({
        message : "Called Get Route"
    })
})

app.listen(3000, ()=>{
    console.log("Server is started at port 3000")
})