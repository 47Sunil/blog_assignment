import { Router } from "express";
const router = Router();

import BlogRoutes from "./routes/blogRoute.js";

router.use("/api/v1/blogs", BlogRoutes);

export default router;
