const mongoose=require("mongoose");

const DB=process.env.DATABASE;

mongoose.connect(DB,{
   useNewUrlParser: true,
 }).then(()=>{console.log("databse connected successfully")}).catch((err)=>{
   console.log("error:",err)
});