import { CustomError, NotFoundError } from "errors";
import { Request, Response } from 'express';
import { body } from "express-validator";
import httpStatus from "http-status";
import { userService } from "services";
import { comparePassword, errorHandlerWrapper } from "utils";
import jwt from 'jsonwebtoken';
import { JWT_EXPIRATION_TIME, JWT_TOKEN } from "config";
import { UserEntity } from "entities";

export const signInValidator = () => {
    return [
        body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email type is not valid'),
    ];
}

type Params = unknown;
type ResBody = unknown;
type ReqBody = {
    name: string;
    email: string;
    password: string
}
type ReqQuery = unknown;

export const signInHandler = async (
    req: Request<Params, ResBody, ReqBody, ReqQuery>,
    res: Response
) => {
    const { email, password } = req.body;
    const user:UserEntity = await userService.getUserFromEmail(email);

    if(!user) {
        throw new NotFoundError('This email does not exist.')
    }

    const validatePassword: Boolean = await comparePassword(password, user.password);

    if(!validatePassword) {
        throw new CustomError('Password does not correct.', httpStatus.BAD_REQUEST);
    }

    const token: string = jwt.sign(
        {email},
        JWT_TOKEN,
        {
            expiresIn: JWT_EXPIRATION_TIME
        }
    );

    res.status(httpStatus.OK).json({token: token});
}

export const signIn = errorHandlerWrapper(signInHandler);