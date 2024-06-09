import multer from 'multer'
import { NextFunction, Request, Response } from 'express'
import path from 'path'
import fs from 'fs'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const folderPath = path.resolve(__dirname, '..', '..', 'uploads')
        fs.mkdirSync(folderPath, { recursive: true })
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

const upload = multer({ storage, limits: { fileSize: 100000 * 1000 } }).single('file') // fileSize in bytes 

export const uploadFile = (req: Request, res: Response, next: NextFunction) => {
    upload(req, res, (err: any) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Upload file failed')
        }
        next()
    })
}