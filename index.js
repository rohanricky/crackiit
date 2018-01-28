const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const some = require('./routes/some');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.send("HEllo!");
});

app.use('/users',users);
app.use('/some',some);

app.listen(5000,() => console.log('Example app listening on port 5000!'))
