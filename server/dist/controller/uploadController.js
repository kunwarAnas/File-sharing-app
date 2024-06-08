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
exports.handleFileUpload = void 0;
const response_1 = require("../utils/response");
const fileSchema_1 = __importDefault(require("../model/fileSchema"));
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const handleFileUpload = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('route Called');
        const { filename, path: filePath, size } = req.file || {};
        if (!req.file) {
            return res.json(new response_1.ApiResponse('please upload a file'));
        }
        const createFile = new fileSchema_1.default({
            fileName: filename,
            uuid: crypto_1.default.randomUUID(),
            path: filePath,
            size
        });
        const response = yield createFile.save();
        const directory = path_1.default.resolve("uploads");
        console.log(directory);
        fs_1.default.readdir(directory, (err, files) => {
            if (err)
                throw err;
            for (const file of files) {
                if (file === filename)
                    continue;
                fs_1.default.unlink(path_1.default.join(directory, file), (err) => {
                    if (err)
                        throw err;
                });
            }
        });
        return res.json(new response_1.ApiResponse({ file: `${process.env.BASE_URL}/api/file/${response.uuid}` }));
    }
    catch (error) {
        error instanceof Error && res.status(500).json(new response_1.ApiError(error === null || error === void 0 ? void 0 : error.message));
    }
});
exports.handleFileUpload = handleFileUpload;
//# sourceMappingURL=uploadController.js.map