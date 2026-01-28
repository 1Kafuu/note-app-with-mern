import express from "express";
import notesRoute from "./routes/notesRoute.js"
import { DB } from "./config/koneksi.js"
import dotenv from "dotenv"

// Buat akses var env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// buat connect ke database melalui koneksi.js
DB();

// Middleware
app.use(express.json()); 

// Ini semacam prefix buat routenya
app.use("/api/notes", notesRoute);

app.listen (PORT,() => {
    console.log ("Server running on port :", PORT)
});