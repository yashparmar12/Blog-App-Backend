import express from "express";
import { getAllBlogs, addBlog, updateBlog, getById, deleteBlog, getByUSerId } from "../controller/blog-controller";
const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteBlog);
blogRouter.get("/user/:id",getByUSerId);

export default blogRouter;