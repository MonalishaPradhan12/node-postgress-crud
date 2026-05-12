const {Pool} =require("pg");

const pool=new Pool({
  user:"postgres",//postgress sql username
  host:"localhost",//database runnning in my computer
  database:"studentdb",//database name
  password:"admin123",//database password
  port:5432//default postgress port
})

module.exports=pool;