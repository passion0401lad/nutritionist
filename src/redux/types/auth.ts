import {IAction} from './action';
import { UserModel } from '../../models';

export type GetSignUpRequestAction = IAction & {
  userInfo: UserModel
}

export type GetSignInRequestAction = IAction & {
  userInfo: {
    email: string,
    password: string
  }
}