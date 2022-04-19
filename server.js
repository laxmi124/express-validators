const express = require('express');
const app = express();
// const { body, validationResult } = require('express-validator');
const bodyParse = require('body-parser');
const bodyjson = bodyParse.json();
const port = 8000;


app.post("/user",bodyjson,(req,res,next)=>{
  
    const body = req.body;
    console.log(body)

    if (!body.first_name){
        res.json("Please enter your first name")
    }
    if (!body.last_name){
        res.json("Please enter your last name")
    }
    if (body.age<=0){
        res.json("Please enter valid age")
    }
    if (body.age>100){
        res.json("You are not eligible")
    }
    if (body.gender !== "male" && body.gender !== "female" && body.gender !== "others"){
        res.json("please enter your correct gender")
    }
    if (body.pincode.length !== 6){
        res.json("please enter your correct pincode")
    }
    if ( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body.email))){
        res.json("please enter your correct email")
    }

    next();
},
(req,res,next)=>{
    res.json("successfull")
}

)
  app.listen(port,()=>{
      console.log(`its running from port no ${port}`)
  })