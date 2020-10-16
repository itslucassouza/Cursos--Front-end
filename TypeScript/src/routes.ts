import {Request, Response } from 'express';
import createUser from './services/createUser';

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        email: 'lucassouza@hotmail.com',
        password: '12432423',
        techs: ['node.js', 'ReactJS', 'ReactNative']
    });



    return response.json({ message: 'Hello world'});
}