import {Request} from 'express';

export class SignInRequestDTO {
    username: string;
    password: string;

    constructor (request: Request) {
        this.username    = request.body.username;
        this.password    = request.body.password;
    }
}