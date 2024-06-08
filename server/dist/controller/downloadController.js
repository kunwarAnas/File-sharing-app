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
exports.downloadFile = exports.renderDownloadPage = void 0;
const response_1 = require("../utils/response");
const fileSchema_1 = __importDefault(require("../model/fileSchema"));
const path_1 = __importDefault(require("path"));
const renderDownloadPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { uuid } = req.params;
        if (!uuid) {
            throw new Error('file Id Is Required');
        }
        const file = yield fileSchema_1.default.findOne({ uuid });
        if (!file) {
            return res.render('downloadPage', {
                error: 'Link has been expired'
            });
        }
        return res.render('downloadPage', {
            uuid: file.uuid,
            fileName: file.fileName,
            fileSize: file.size,
            downloadLink: `${(_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.BASE_URL}/api/file/download/${file === null || file === void 0 ? void 0 : file.uuid}`
        });
    }
    catch (error) {
        error instanceof Error && res.status(500).json(new response_1.ApiError(error === null || error === void 0 ? void 0 : error.message));
    }
});
exports.renderDownloadPage = renderDownloadPage;
const downloadFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { uuid } = req.params;
        if (!uuid) {
            throw new Error('file Id Is Required');
        }
        const file = yield fileSchema_1.default.findOne({ uuid });
        if (!file) {
            return res.render('downloadPage', {
                error: 'Link has been expired'
            });
        }
        const Filepath = path_1.default.normalize(`${__dirname}../../../${file.path}`);
        return res.download(Filepath);
    }
    catch (error) {
        error instanceof Error && res.status(500).json(new response_1.ApiError(error === null || error === void 0 ? void 0 : error.message));
    }
});
exports.downloadFile = downloadFile;
//# sourceMappingURL=downloadController.js.map