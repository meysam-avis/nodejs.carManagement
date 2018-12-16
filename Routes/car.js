const express = require('express');
const path=require('path');
const fs=require("fs");
const router = express.Router();

let result='';
router.get('/', function(req, res){
   const  header_path= path.join(__dirname,'../Views/',"header.html");
   const footer_path=path.join(__dirname,'../Views/',"footer.html");
   const body_path=path.join(__dirname,'../Views/Car',"index.html");
  const header= fs.readFileSync(header_path, 'utf8');
  const footer=fs.readFileSync(footer_path, 'utf8');
  const body=fs.readFileSync(body_path, 'utf8');

  result= header.concat(body).concat(footer);
  // result=header+body+footer;


  //console.log("hp:"+header_path);


   res.send( result );

});
router.get('/index', function(req, res){
    res.send( result );
 
 });

 

module.exports = router;