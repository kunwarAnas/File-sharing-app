"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const uploadRoute_1 = __importDefault(require("./routes/uploadRoute"));
const downloadPageRoute_1 = __importDefault(require("./routes/downloadPageRoute"));
const sendEmailRoute_1 = __importDefault(require("./routes/sendEmailRoute"));
const DB_1 = require("./DB"); // ConnectDB 
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('tiny'));
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.use(express_1.default.static(path_1.default.resolve(__dirname, '..', 'build')));
// Rendering EJS
app.set('views', path_1.default.join(__dirname + '/views'));
app.set('view engine', 'ejs');
// Routes
console.log(path_1.default === null || path_1.default === void 0 ? void 0 : path_1.default.join(process.cwd() + '/build'));
app.use('*', (_, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '..', 'build', 'index.html'));
});
app.use('/api', uploadRoute_1.default);
app.use('/api/file', downloadPageRoute_1.default);
app.use('/api/send', sendEmailRoute_1.default);
// Handling 404
app.use((req, res) => {
    res.status(404).send('Error No Route matches');
});
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
});
(0, DB_1.connectDB)();
//# sourceMappingURL=app.js.map