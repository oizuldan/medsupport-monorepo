import {Request} from 'express';

export class SignUpRequestDTO {
    username: string;
    password: string;
    name : string;
    family_name: string;
    gender: string;
    birthdate: string;
    email: string;
    nickname: string;

    constructor (request: Request) {
        this.username    = request.body.username;
        this.password    = request.body.password;
        this.name        = 'default name';
        this.family_name = 'default family name';
        this.gender      = 'default gender';
        this.birthdate   = '30/03/1999';
        this.email       = request.body.email;
        this.nickname    = 'default nickname';
    }
}