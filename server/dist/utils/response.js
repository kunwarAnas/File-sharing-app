"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = exports.ApiResponse = void 0;
class ApiResponse {
    constructor(data = {}, message = 'success', status = 200) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
exports.ApiResponse = ApiResponse;
class ApiError {
    constructor(error = 'Server Error', data = {}, status = 500) {
        this.status = status;
        this.error = error;
        this.data = data;
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=response.js.map