import {IAction} from './action';

export type UploadFile = IAction & {
  data: Record<string, any>
}
