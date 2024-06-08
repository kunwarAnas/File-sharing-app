"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const emailTemplate_1 = require("./emailTemplate");
const transporter = nodemailer_1.default.createTransport({
    host: "gmail",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});
function sendEmail(reciever, downloadLink) {
    return __awaiter(this, void 0, void 0, function* () {
        yield transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: reciever,
            subject: "Hello ✔",
            text: "Hello world?", // plain text body
            html: (0, emailTemplate_1.template)('New file shared', reciever, downloadLink) // html body
        });
    });
}
exports.default = sendEmail;
//# sourceMappingURL=sendEmail.js.map