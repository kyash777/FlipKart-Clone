import express from "express";
import dotenv from "dotenv"
import { Connection } from "./database/db.js";
import DefaultData from "./default.js";
import router from "./routes/routes.js";
import cors from "cors";
import bodyparser from "body-parser";
import path from "path";
const __dirname = path.resolve();


const app=express();

dotenv.config();

app.use(cors());
app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));

app.use('/',router);
const userName=process.env.USER;
const password=process.env.PASSWORD;

const URL=process.env.MONGODB_URI || `mongodb+srv://${userName}:${password}@cluster0.1jgckmq.mongodb.net/ecommerceDB`;
const PORT=process.env.port || 8000;

Connection(URL);

//static files 
app.use(express.static(path.join(__dirname,"./client/build")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})



  
app.listen(PORT,function(){
    console.log(`server started at port ${PORT}`);
})

DefaultData();