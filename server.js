const express = require('express');
const path = require('path');


const app = express();

const  route = require('./server/route');

app.use(express.static(path.join(__dirname,'dist')));
app.use('/post',route);

const port = process.env.PORT || 4200
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
})

app.listen(port,(req,res)=>{
    console.log('running 4200');
});