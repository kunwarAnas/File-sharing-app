import { Request, Response } from 'express'
import FileModel from '../model/fileSchema';
import { ApiError } from '../utils/response';
import sendEmail from '../utils/sendEmail';
import path from 'path';

export const sendController = async (req: Request, res: Response) => {
    try {
        const { uuid, sender, receiver } = req.body

        if (!uuid || !sender || !receiver) {
            throw new Error('file Id Is Required');
        }

        if (process.env.NODE_ENV !== 'development') {
            res.status(500).json(new ApiError('Email service is not available on prod' as string))
        }

        const file = await FileModel.findOne({ uuid });

        if (!file) {
            return res.render('downloadPage', {
                error: 'Link has been expired'
            })
        }

        if (file.sender) {
            res.status(500).json(new ApiError('Email already sent' as string))
        }

        file.sender = sender;
        file.receiver = receiver;
        await file.save()

        const filepath = path.normalize(`${__dirname}../../../${file.path}`);

        sendEmail(receiver, filepath)

    } catch (error) {
        error instanceof Error && res.status(500).json(new ApiError(error?.message as string))
    }

}