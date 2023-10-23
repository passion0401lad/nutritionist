import { CustomError, NotFoundError } from "errors";
import { UserEntity } from "entities";
import { Response } from 'express';
import httpStatus from "http-status";
import {errorHandlerWrapper } from "utils";
import { AuthRequest } from 'types';
import { userService } from "services";


export const deleteUserValidator = () => {
    return [];
}

type Params = {
    id:number
};
type ResBody = unknown;
type ReqBody = unknown;
type ReqQuery = unknown;

export const deleteUserHandler = async (
  req: AuthRequest<Params, ResBody, ReqBody, ReqQuery>,
  res: Response
) => {

    const {id} = req.params;
    const user_now = req.user;
    const user_delete:UserEntity = await userService.getUserFromId(id);

    if(!user_delete) {
        throw new NotFoundError('This user does not exist.')
    }

    const delete_result:any = await userService.deleteUserFromId(id);
    console.log(delete_result)
  res.status(httpStatus.OK).json({delete_result: delete_result});
}

export const deleteUser = errorHandlerWrapper(deleteUserHandler);