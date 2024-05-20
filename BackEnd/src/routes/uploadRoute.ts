import express from 'express';
import { uploadFile } from '../middleware/upload';
import { handleFileUpload } from '../controller/uploadController'

const uploadRouter = express.Router();

uploadRouter.post('/upload', uploadFile, handleFileUpload)

export default uploadRouter