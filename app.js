import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import bodyparser from "body-parser";
import blogRouter from "./routes/blog-routes";

const app = express();
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());


app.use("/api/user",router);
app.use("/api/blog",blogRouter);

mongoose.connect("mongodb+srv://admin:GOEZbiTcWIBqGNEl@cluster0.gsymm3t.mongodb.net/Blog?retryWrites=true&w=majority"
)
.then(()=>console.log("connection success"))
.then(()=>{app.listen(5000);
})
.catch((err)=>console.log(err));
