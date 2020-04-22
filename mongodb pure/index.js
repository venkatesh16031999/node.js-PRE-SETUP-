const express=require('express');
const app=express();
const mongodb=require('mongodb');
const db=require('./db');

app.get('/createuser',(req,res)=>{

    db().collection('users').insertOne({
        name:"v"
    }).then(data=>{
        res.send(data)
    });

});

app.get('/getuser',(req,res)=>{

    db().collection('users').findOne({
        name:"ven"
    }).then(data=>{
        res.send(data);
    });


});

app.get('/updateuser',(req,res)=>{

    db().collection('users').update({
        name:"ven"
    },{
        $set:{name:"diljfejfiepwjf"}
    }).then(data=>{
        res.send(data)
    });

});

app.get('/deleteuser',(req,res)=>{

    db().collection('users').deleteOne({
        name:"v"
    }).then(data=>{
        res.send(data)
    });

});



app.listen(3000,()=>{
    console.log("server is started");
})



