import { Request, Response } from 'express'
import { ApiError, ApiResponse } from '../utils/response';
import FileModel from '../model/fileSchema'
import crypto from 'crypto'

export const handleFileUpload = async (req: Request, res: Response) => {
    try {
        const { filename, path, size } = req.file || {};

        if (!req.file) {
            return res.json(new ApiResponse('please upload a file'))
        }

        const createFile = new FileModel({
            fileName: filename,
            uuid: crypto.randomUUID(),
            path,
            size
        })

        const response = await createFile.save()

        return res.json(new ApiResponse({ file: `${process.env.BASE_URL}/api/file/${response.uuid}` }))

    } catch (error) {
        error instanceof Error && res.status(500).json(new ApiError(error?.message as string))
    }
}

