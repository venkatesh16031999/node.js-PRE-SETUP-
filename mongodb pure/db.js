const { MongoClient } = require('mongodb');
let db;
MongoClient.connect('mongodb://127.0.0.1:27017/placement').then(client=>{
     db=client.db();
     console.log("Connected");
}).catch(err=>{
     console.log(err.message);
})

const getDb=(()=>{
     return db;
});

module.exports=getDb;