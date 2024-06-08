import { Request, Response } from 'express'

export class ApiResponse {
    status: number;
    message: string;
    data: {} | [];
    constructor(data: {} | [] = {}, message = 'success', status = 200) {
        this.status = status;
        this.message = message;
        this.data = data
    }
}

export class ApiError {
    status: number;
    error: string ;
    data: {} | []
    constructor(error = 'Server Error', data: {} | [] = {}, status = 500) {
        this.status = status;
        this.error = error;
        this.data = data
    }
}