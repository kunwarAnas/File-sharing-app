import mongoose from "mongoose";

const { DB_USER, DB_PASS } = process.env

const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.qjq61dj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectionOptions = {
    dbName: `FilesDB`,
}

export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, connectionOptions)
        console.log('DB Connected');
    } catch (err: any) {
        console.log("DB connection error", err.message);
        process.exit(1);
    }
}