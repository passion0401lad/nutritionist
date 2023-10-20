import { CustomError, NotFoundError } from "errors";
import { UserEntity } from "entities";
import { Response } from 'express';
import httpStatus from "http-status";
import {errorHandlerWrapper } from "utils";
import { AuthRequest } from 'types';
import { userService } from "services";


export const getUserValidator = () => {
    return [];
}

type Params = {
    email:string
};
type ResBody = unknown;
type ReqBody = unknown;
type ReqQuery = unknown;

export const getUserHandler = async (
  req: AuthRequest<Params, ResBody, ReqBody, ReqQuery>,
  res: Response
) => {

    const {email} = req.params;
    const user_now = req.user;
  const user_get:UserEntity = await userService.getUserFromEmail(email);


  if(!user_get) {
    throw new NotFoundError("This Email's User is not exist.")
  } 

  res.status(httpStatus.OK).json({user_get: user_get, user_now:user_now});
}

export const getUser = errorHandlerWrapper(getUserHandler);