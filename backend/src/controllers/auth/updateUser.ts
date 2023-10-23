import { REASON_CODES } from "consts";
import { UserEntity } from "entities";
import { DuplicateError, CustomError } from "errors";
import { Request, Response } from "express";
import { body } from "express-validator";
import httpStatus from "http-status";
import { userService } from "services";
import { AuthRequest } from "types";
import { encryptPassword, errorHandlerWrapper } from "utils";

export const updateUserValidator = () => {
  return [
    // body("name").notEmpty().withMessage("Name is required"),
    // body("email").notEmpty().withMessage("Email is required"),
    // body("email").optional().isEmail().withMessage("Email type is not valid"),
    // body("password")
    //   .isLength({ min: 6, max: 30 })
    //   .withMessage("The length of password must be between 6 and 30."),
  ];
};

type Params = unknown;
type ResBody = unknown;
type ReqBody = {
  name?: string;
  sex?: Boolean;
  birthday?: Date;
  password?: string;
};
type ReqQuery = unknown;

export const updateUserHandler = async (
  req: AuthRequest<Params, ResBody, ReqBody, ReqQuery>,
  res: Response
) => {
  const { name, sex, birthday, password } = req.body;

  const user = req.user;
  console.log(user)

  const hashPassword: string = await encryptPassword(password);

  const updateUser: UserEntity = await userService.updateUser({
    name: name,
    email:user.email,
    sex: sex,
    birthday: birthday,
    password: hashPassword,
  });

  res.status(httpStatus.OK).json(updateUser);
  // } catch (err) {
  //     console.log(err);
  //     res.status(httpStatus.INTERNAL_SERVER_ERROR)
  //     .json({message: 'Your sigining up failed!!!'});
  // }
};

export const updateUser = errorHandlerWrapper(updateUserHandler);
