const Sequelize=require('sequelize');

const sequelize=new Sequelize('seq','postgres','test',{
    host: 'localhost',
  dialect: 'postgres'
});

module.exports=sequelize;