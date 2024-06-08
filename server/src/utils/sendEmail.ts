import nodemailer from 'nodemailer'
import { template } from './emailTemplate'

const transporter = nodemailer.createTransport({
    host: "gmail",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});


async function sendEmail(reciever: string, downloadLink: string) {
    await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: reciever,
        subject: "Hello ✔",
        text: "Hello world?", // plain text body
        html: template('New file shared', reciever, downloadLink) // html body
    });
}

export default sendEmail