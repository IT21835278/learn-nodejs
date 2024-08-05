const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")






const app = express()

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get("/api/user",(req,res)=>{
    res.send("Hello ")
})



mongoose.connect("mongodb+srv://it21835278:1HQKXAivL1YCMcPb@cluster0.re4imgg.mongodb.net/learn-nodejs?retryWrites=true&w=majority")



app.listen(5001,()=>{
    console.log("Server run 😁🔥");
})


const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log("SERVER RUN");
        })
    })
    .catch((error)=>console.log(error))

