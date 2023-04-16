const express = require('express');
const app = express();
const db=require('./mongoose');
const port=8000;
app.use(express.urlencoded());
app.use(express.json());
app.use('/',require('./routes'));
app.listen(port,function(req,res){
    console.log(`Server is running on ${port}`);
})