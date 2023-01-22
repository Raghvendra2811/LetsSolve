const express =require('express')
const cors =require('cors')
const dotenv= require('dotenv');
const questionRouter = require('./Routes/question.routes');
const mongooseConnect=require('./Database/connect')

dotenv.config()


const app= express();
app.use(cors())
app.use(express.json())
app.use('/question',questionRouter)


const port=process.env.APP_PORT||3002




mongooseConnect().then((status)=>{
    console.log(status);
    app.listen(port,()=>{
        console.log(`running at ${port}`)
    })
}).catch((err)=>{
    console.log(err)
})
