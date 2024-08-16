const express=require('express')
require('dotenv').config();
const mongoose=require('mongoose')
const app=express()

app.get('/',(req,res)=>{
    res.send("testing 123..")
})




const port=3000;
const start=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(port,console.log(`running on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}
start()
