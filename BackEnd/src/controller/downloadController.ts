import { Request, Response } from 'express'
import { ApiError } from '../utils/response';
import FileModel from '../model/fileSchema'
import path from 'path'

export const renderDownloadPage = async (req: Request, res: Response) => {
    try {
        const { uuid } = req.params

        if (!uuid) {
            throw new Error('file Id Is Required');
        }

        const file = await FileModel.findOne({ uuid });

        if (!file) {
            return res.render('downloadPage', {
                error: 'Link has been expired'
            })
        }

        return res.render('downloadPage', {
            uuid: file.uuid,
            fileName: file.fileName,
            fileSize: file.size,
            downloadLink: `${process?.env?.BASE_URL}/api/file/download/${file?.uuid}`
        })
    } catch (error) {
        error instanceof Error && res.status(500).json(new ApiError(error?.message as string))
    }

}

export const downloadFile = async (req: Request, res: Response) => {
    try {
        const { uuid } = req.params

        if (!uuid) {
            throw new Error('file Id Is Required');
        }

        const file = await FileModel.findOne({ uuid });

        if (!file) {
            return res.render('downloadPage', {
                error: 'Link has been expired'
            })
        }

        const Filepath  = path.normalize(`${__dirname}../../../${file.path}`);

        return res.download(Filepath)

    } catch (error) {
        error instanceof Error && res.status(500).json(new ApiError(error?.message as string))
    }

}