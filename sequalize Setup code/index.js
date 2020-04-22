const express=require('express');
const app=express();

const sequelize=require('./db');

const User=require('./models/user');

User.sync();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("<h1>hello</h1>");
})

app.get("/usercreate",(req,res)=>{
    
    User.create({
        name:"venkatesh1",
        email:"rvenki1666@gmail.com"
    }).then(result=>{
        res.send(result.dataValues);
    })

});

app.get('/user/:id',(req,res)=>{
    User.findAll({
        where:{
            id:req.params.id
        }
    }).then(result=>{
        res.send(result[0]);
    })
});


app.get('/userupdate/:id',async(req,res)=>{
    await User.findByPk(req.params.id)
    .then(data=>{
        return data.update({name:"Venkatesh developer"});
    })
    .then(result=>{
        res.send(result);
    })
});


app.get('/userdelete/:id',async(req,res)=>{
    await User.findByPk(req.params.id)
    .then(data=>{
        return data.destroy();
    })
    .then(result=>{
        res.send(result);
    })
});


sequelize.sync().then(res=>{
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    })
}).catch((err)=>{
    console.log(err.message);
});

