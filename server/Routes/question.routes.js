const {Router} =require('express');
const { postQuestion ,getQuestions,updateQuestion,deleteQuestion} = require('../Controller/questions.controllers');

const questionRouter = Router();

questionRouter.post('/',async (req,res)=>{
    try{
        let body= req.body
        let result= await postQuestion(body)
        res.send({data:result})
    }
    catch(err){
        res.status(500).send({err:err.message})
    }
})


questionRouter.get('/',async (req,res)=>{
    try{
        let result = await getQuestions()
        res.send({data:result})
    }catch(err){
        res.status(500).send({err:err.message})
    }
})


questionRouter.patch('/:id', async (req,res)=>{
    try{
        let id=req.params.id
        let body = req.body
        let result =  await updateQuestion(id,body)
        res.send({data:result})
    }catch(err){
        res.status(500).send({err:err.message})
    }
})


questionRouter.delete('/:id',async (req,res)=>{
    try{

        let id = req.params.id;
        let result = await deleteQuestion(id)
        res.send({data:result})
    }catch(err){
        res.status(500).send({err:err.message})
    }
})




module.exports=questionRouter
