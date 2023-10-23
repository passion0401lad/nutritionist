import { Dayjs } from "dayjs";


export interface UserModel {
    name: string;
    email: string;
    sex: Boolean;
    birthday: Dayjs | null;
    avatar: string;
    password: string;
    confirmPassword: string;
}