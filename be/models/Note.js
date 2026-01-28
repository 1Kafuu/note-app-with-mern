import mongoose from "mongoose";

// 1. Buat skema/tabel
// 2. Buat model berdasarkan skema/tabel

const noteSchema = mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
}, 
{timestamps: true} // Otomatis bikin created_at dan update_at tabel
);

const Note = mongoose.model("Note", noteSchema)

export default Note