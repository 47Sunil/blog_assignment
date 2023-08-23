import express from "express";
import dotenv from "dotenv";
import helmet from "helmet"; // to secure express app by setting various http headers.
import mongoSanitize from "express-mongo-sanitize"; // sanitizes user-supplied data to prevent mongoDB operator injection.
import cookieParser from "cookie-parser"; // to parse cookie header and req.cookie with an object keyed by the cookie name.
import cors from "cors"; // to protect and restrict access to the server.

//  create express app
const app = express();

// to secure express app by setting various http headers.
app.use(helmet());

// parse json request url
app.use(express.json());

// parse json request body
app.use(express.urlencoded({ extended: true }));

// sanatize request data
app.use(mongoSanitize());

// enable cookie-parser
app.use(cookieParser());

// test api
app.get("/", (req, res) => {
  console.log("Hello this is from test API");
  res.send(req.body);
});

import allRoutes from "./allRoutes.js";
app.use(allRoutes);
app.all("*", function (req, res) {
  res.status(500).json({ status: false, message: "No route found" });
});

export default app;
