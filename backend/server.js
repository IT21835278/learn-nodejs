const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")

//add new dependancy for allowto access .env file
const dotenv = require("dotenv").config();







const app = express()

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get("/api/user",(req,res)=>{
    res.send("Hello ")
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

