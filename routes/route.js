const express=require('express');
const studentmodel = require('../models/student-model');
const routes=express();

routes.get('/',(req,res)=>{

    res.render('Home',{title:"Home page"});
})

routes.get('/viewdata', async(req,res)=>{
    let students = await studentmodel.find({});
    console.log(students);
    res.render('viewdata',{students});
})

routes.post('/studentform',async (req,res)=>{
    let {editid} =req.body;
    if(!editid){
        let student= new studentmodel({
            fname:req.body.fname,
            lname:req.body.lname,
            number:req.body.number,
            email:req.body.email, 
          
        })
        // console.log(student);
        student.save();
    }else{
        let updatebook = await studentmodel.updateOne({_id:editid},{
            fname:req.body.fname,
            lname:req.body.lname,
            number:req.body.number,
            email:req.body.email, 
         
        })
            
        console.log("updated success",updatebook);
    }
    res.redirect('/viewdata');
   
})

routes.get('/deletestd/:id',async (req,res)=>{
    let{id}=req.params;
    await studentmodel.deleteOne({_id:id});
    console.log(id);
    res.redirect('/viewdata');
})



routes.get('/editstd/:id',async(req,res)=>{
    let { id }=req.params;
    let singlerecord= await studentmodel.findById(id);
    console.log("singlerecord",singlerecord);
    
    res.render('edit',{singlerecord});
})



module.exports=routes;