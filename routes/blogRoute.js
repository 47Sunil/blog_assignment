import { Router } from "express";
import trimRequest from "trim-request";
import {
  createBlog,
  getBlogById,
  getAllBlogs,
  updateBlog,
  deleteBlog,
} from "../controller/blogController.js";

import { rateLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.route("/").post(trimRequest.all, createBlog);
router.route("/list").get(rateLimiter, getAllBlogs);
router
  .route("/:id")
  .get(rateLimiter, getBlogById)
  .delete(deleteBlog)
  .put(trimRequest.all, updateBlog);

export default router;
