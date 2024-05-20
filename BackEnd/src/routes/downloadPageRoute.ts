import express from 'express';
import { renderDownloadPage , downloadFile } from '../controller/downloadController'

const downloadRouter = express.Router();

downloadRouter.get('/:uuid', renderDownloadPage)
downloadRouter.get('/download/:uuid', downloadFile)

export default downloadRouter