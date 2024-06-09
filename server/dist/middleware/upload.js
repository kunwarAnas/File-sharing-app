"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        const folderPath = path_1.default.resolve(__dirname, '..', '..', 'uploads');
        fs_1.default.mkdirSync(folderPath, { recursive: true });
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path_1.default.extname(file.originalname));
    }
});
const upload = (0, multer_1.default)({ storage, limits: { fileSize: 100000 * 1000 } }).single('file'); // fileSize in bytes 
const uploadFile = (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Upload file failed');
        }
        next();
    });
};
exports.uploadFile = uploadFile;
//# sourceMappingURL=upload.js.map