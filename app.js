require("dotenv").config();

const express=require("express");
const app=express();
require("./db/connection");
const cors=require("cors");
const router = require("./Routes/routes");
const PORT=5000;


app.use(cors());
app.use(express.json());
app.use("/uploads",express.static("./uploads"));
app.use("/files",express.static("./public/files"));
app.use(router);

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})