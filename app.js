const express=require('express')
const tasks=require("./routes/tasks");
require('dotenv').config();
const mongoose=require('mongoose')
const app=express()

app.use(express.json());
app.use('/api/v1/tasks',tasks)

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
