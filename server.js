const express=require('express');
var path    = require("path");
const handlebars=require('handlebars');
const fs=require('fs');
const  cars = require('./Routes/car.js');
var app = express();
 
app.use('/car/',cars);



/* const inFile = './report1.hbs';

const data = require('./site1.json');

const source = fs.readFileSync('./Views/header.html', 'utf8');
const source2=fs.readFileSync('./Views/footer.html', 'utf8');
source3=source+source2;
const template = handlebars.compile(source3, { strict: true });
const result = template(data);

console.log(result);

app.use("/Car/","")

//app.get('/',(req,res)=>{
// 
  //res.send(result);
//});
app.get('/', function(req, res){
  res.send("Hello World!");
}); */
 
app.listen(3000);
