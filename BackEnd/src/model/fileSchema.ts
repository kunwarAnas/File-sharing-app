import mongoose from "mongoose";

interface Ifile extends mongoose.Document {
    fileName: String,
    path: String,
    size: String,
    email: String,
    uuid: String,
    sender: String,
    receiver: String
}

const Schema = mongoose.Schema;

const fileSchema = new Schema<Ifile>({
    fileName: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: String, required: true },
    uuid: { type: String, required: true },
    email: { type: String, required: false },
    sender: { type: String, required: false },
    receiver: { type: String, required: false },
}, { timestamps: true })

const FileModel = mongoose.model('Files', fileSchema, 'Files');

export default FileModel