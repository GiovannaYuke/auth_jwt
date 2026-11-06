import express from "express";
import jwt from "jsonwebtoken";
import usuarios from "./usuarios.js";

const app = express();
const port = process.env.port;
const secret = process.env.secret;
app.use(express.json());


