import { Request, Response } from 'express'
import { ApiError, ApiResponse } from '../utils/response';
import FileModel from '../model/fileSchema'
import crypto from 'crypto'
import fs from 'fs';
import path from 'path';

export const handleFileUpload = async (req: Request, res: Response) => {
    try {
        console.log('route Called');
        const { filename, path: filePath, size } = req.file || {};

        if (!req.file) {
            return res.json(new ApiResponse('please upload a file'))
        }

        const createFile = new FileModel({
            fileName: filename,
            uuid: crypto.randomUUID(),
            path: filePath,
            size
        })

        const response = await createFile.save()

        const directory = path.resolve(__dirname, "..", "uploads")

        fs.readdir(directory, (err, files) => {
            if (err) throw err;
            for (const file of files) {
                if (file === filename) continue;
                fs.unlink(path.join(directory, file), (err) => {
                    if (err) throw err;
                });
            }
        });

        return res.json(new ApiResponse({ file: `${process.env.BASE_URL}/api/file/${response.uuid}` }))

    } catch (error) {
        error instanceof Error && res.status(500).json(new ApiError(error?.message as string))
    }
}

