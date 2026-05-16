const express=require("express");

const studentRoutes=require("./routes/studentRoutes");//route
const authRoutes=require("./routes/authRoutes")

const app=express();

app.use(express.json());


app.use("/students",studentRoutes)//call the route
app.use("/auth",authRoutes)
app.listen(3000,()=>{
  console.log("Server started on port 3000")
})