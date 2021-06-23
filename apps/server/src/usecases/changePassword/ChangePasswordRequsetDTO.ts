import {Request} from 'express';

export class ChangePasswordRequestDTO {
    username: string;
    password: string;
    new_password: string;

    constructor (request: Request) {
        this.username     = request.body.username;
        this.password     = request.body.password;
        this.new_password = request.body.new_password;
    }
}