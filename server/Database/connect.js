const mongoose = require('mongoose');

async function mongooseConnect(){
    return new Promise((resolve,reject)=>{
        mongoose.connect('mongodb://127.0.0.1:27017/myapp')
        .then(()=>{
            return resolve("connected to database")
        })
        .catch(()=>{
            return reject("something went wrong")
        })
    })
}

module.exports=mongooseConnect;