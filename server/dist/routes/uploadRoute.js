"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_1 = require("../middleware/upload");
const uploadController_1 = require("../controller/uploadController");
const uploadRouter = express_1.default.Router();
uploadRouter.post('/upload', upload_1.uploadFile, uploadController_1.handleFileUpload);
exports.default = uploadRouter;
//# sourceMappingURL=uploadRoute.js.map