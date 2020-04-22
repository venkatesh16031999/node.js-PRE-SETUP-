const express = require('express');
const path=require('path');
const app=express();
const ejs=require('ejs');
const multer=require('multer');
const session=require("express-session");

app.use(session({
    secret:"dgeregdger",
    resave:false,
    saveUninitialized:false,
}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images/myuploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+".jpeg")
    }
  })

app.use(multer({storage:storage}).single('image'));

app.post('/postImage',(req,res)=>{

    console.log(req.session.isLoggedIn=true);

    console.log(req.file.path);
    res.redirect("/home");
});

app.post('/destroyed',(req,res)=>{
    req.session.destroy((err)=>{
        console.log(err);
    });
    console.log(req.session);
    res.redirect('/home');
});

app.get('/home',(req,res)=>{
    res.render("home");
});

app.listen(3000,()=>{
    console.log("Server connected");
});