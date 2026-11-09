import express from "express";
import jwt from "jsonwebtoken";
import usuarios from "./usuarios.js";
import "dotenv/config";

const app = express();
const port = process.env.port;
const secret = process.env.secret;
app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password} = req.body;
    const usuario = usuarios.find()
});




