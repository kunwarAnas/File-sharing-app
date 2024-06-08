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
exports.sendController = void 0;
const fileSchema_1 = __importDefault(require("../model/fileSchema"));
const response_1 = require("../utils/response");
const sendEmail_1 = __importDefault(require("../utils/sendEmail"));
const path_1 = __importDefault(require("path"));
const sendController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { uuid, sender, receiver } = req.body;
        if (!uuid || !sender || !receiver) {
            throw new Error('file Id Is Required');
        }
        if (process.env.NODE_ENV !== 'development') {
            res.status(500).json(new response_1.ApiError('Email service is not available on prod'));
        }
        const file = yield fileSchema_1.default.findOne({ uuid });
        if (!file) {
            return res.render('downloadPage', {
                error: 'Link has been expired'
            });
        }
        if (file.sender) {
            res.status(500).json(new response_1.ApiError('Email already sent'));
        }
        file.sender = sender;
        file.receiver = receiver;
        yield file.save();
        const filepath = path_1.default.normalize(`${__dirname}../../../${file.path}`);
        (0, sendEmail_1.default)(receiver, filepath);
    }
    catch (error) {
        error instanceof Error && res.status(500).json(new response_1.ApiError(error === null || error === void 0 ? void 0 : error.message));
    }
});
exports.sendController = sendController;
//# sourceMappingURL=emailController.js.map