import mongoose from "mongoose"

export const DB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected succesfully");
    } catch (error) {
        console.error("Error connecting to MongoDB ", error);
    }
}