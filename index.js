const express=require("express");

const studentRoutes=require("./routes/studentRoutes");//route

const app=express();

app.use(express.json());


app.use("/students",studentRoutes)//call the route
app.listen(3000,()=>{
  console.log("Server started on port 3000")
})