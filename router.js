
const express=require('express')
const router=express.Router();
const axios = require('axios');



router.post("/getOutput",(req,res)=>{
    const {code,language,input}=req.body
    //console.log(req.body)
    const data ={
           code,
           language,
           input
    }
    console.log(data);


axios.post('https://codex-api.herokuapp.com/',data)
.then(function (response) {
    
  const output=response.data.output || response.data.error;
  console.log(response.data);

  return res.send(output)
})
.catch(function (error) {
 console.log(error);
});
    
   
})

module.exports=router

//axios.post('https://codexweb.netlify.app/.netlify/functions/enforceCode',data)
//