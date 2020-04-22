const express=require("express");
const app=express();
const path=require("path");
const ejs=require("ejs");
const port=process.env.PORT || 8000;
const viewPath=path.join(__dirname,"views");

app.set("view engine","ejs");
app.set("views",viewPath);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public'),{index:false,extensions:['ejs']}));

app.get("/home",(req,res)=>{
    res.render("./home/home");
});

app.get("/subpage",(req,res)=>{
    res.render("./subpage/subpage");
});

app.listen(port,()=>{
    console.log("server is running on",port);
});
