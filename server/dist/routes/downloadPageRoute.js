"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const downloadController_1 = require("../controller/downloadController");
const downloadRouter = express_1.default.Router();
downloadRouter.get('/:uuid', downloadController_1.renderDownloadPage);
downloadRouter.get('/download/:uuid', downloadController_1.downloadFile);
exports.default = downloadRouter;
//# sourceMappingURL=downloadPageRoute.js.map