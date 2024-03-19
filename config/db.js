const mongoose=require('mongoose');


mongoose.connect('mongodb://127.0.0.1/student').then(()=>{
    console.log("connected mongodb");
}).catch((err)=>{
    console.log("error");
})

module.exports=mongoose;