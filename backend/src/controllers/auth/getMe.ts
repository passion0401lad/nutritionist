import { CustomError, NotFoundError } from "errors";
import { UserEntity } from "entities";
import { Response } from 'express';
import httpStatus from "http-status";
import {errorHandlerWrapper } from "utils";
import { AuthRequest } from 'types';


export const getMeValidator = () => {
    return [];
}

type Params = unknown;
type ResBody = unknown;
type ReqBody = unknown;
type ReqQuery = unknown;

export const getMeHandler = async (
  req: AuthRequest<Params, ResBody, ReqBody, ReqQuery>,
  res: Response
) => {

  const user: UserEntity = req.user;

  if(!user) {
    throw new NotFoundError('This User does not exist.')
  } 

  res.status(httpStatus.OK).json({user: user});
}

export const getMe = errorHandlerWrapper(getMeHandler);