import express from 'express';
import { sendController } from '../controller/emailController';

const sendRoute = express.Router();

sendRoute.post('/', sendController)

export default sendRoute