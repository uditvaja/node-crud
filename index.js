const express=require('express');
const bodyparser=require('body-parser');
const port =5173;
const app=express();
const routes=require('./routes/route');
const db=require('./config/db')

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: false}));
app.use('/',routes);

app.listen(port,()=>{
    console.log("server start....");
})
