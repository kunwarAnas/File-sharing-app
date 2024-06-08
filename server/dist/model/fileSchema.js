"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const fileSchema = new Schema({
    fileName: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: String, required: true },
    uuid: { type: String, required: true },
    email: { type: String, required: false },
    sender: { type: String, required: false },
    receiver: { type: String, required: false },
}, { timestamps: true });
const FileModel = mongoose_1.default.model('Files', fileSchema, 'Files');
exports.default = FileModel;
//# sourceMappingURL=fileSchema.js.map