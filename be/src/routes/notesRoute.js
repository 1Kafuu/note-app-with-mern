import express from "express"
import { createNotes, deleteNotes, getAllNotes, getNoteById, updateNotes } from "../controllers/notesController.js";

const router = express.Router();

// Ini cara kerjanya mirip seperti route di laravel
// Ini tuh disebut end-point
// Methodnya sama persis seperti laravel
// * GET(buat ambil data)
// * PUT(buat update data)
// * DELETE(buat delete data)
// * POST(buat create data)

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/create", createNotes);

router.put("/update/:id", updateNotes);

router.delete("/delete/:id", deleteNotes);

export default router