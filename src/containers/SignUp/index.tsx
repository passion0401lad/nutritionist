import React, { ChangeEvent, useState } from 'react';
import dayjs, { Dayjs } from "dayjs";
import { SignUp } from 'components';
import { useDispatch } from 'react-redux';
import { UserModel } from 'models';
import { AppActions, AppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'consts';
import { useSnackbar } from 'notistack';


export const SignUpContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const initialState: UserModel = {
    name: '',
    email: '',
    sex: true,
    birthday: dayjs('2001-04-01'),
    password: '',
    confirmPassword: ''
  };

  const [userInfo, setUserInfo] = useState <UserModel>(initialState);

  const { enqueueSnackbar } = useSnackbar();

  function setGender(): void {
    setUserInfo({ ...userInfo, sex: !userInfo.sex });
  }

  function birthdayChange(date: Dayjs | null): void {
    setUserInfo({ ...userInfo, birthday: date });
  }

  function onChange(e:ChangeEvent<HTMLInputElement>): void {
    setUserInfo({...userInfo, [e.target.name]:e.target.value});
  }

  function onSubmit(): void {
    if(userInfo.password !== userInfo.confirmPassword) {
      console.log("password error");
      enqueueSnackbar("password must be same!", {
        variant: "error",
        autoHideDuration: 3000,
        style: { fontFamily: "Urbanist", borderRadius: "15px" },
      });
      setUserInfo({...userInfo, password: "", confirmPassword: ""});
      return;
    }
    dispatch(
      AppActions.auth.signUpRequest({
        userInfo: userInfo,
        next: () => {
          navigate(PATH.LOGIN);
          console.log("signup success");
          enqueueSnackbar("Signed up successfully!", {
            variant: "success",
            autoHideDuration: 3000,
            style: { fontFamily: "Urbanist", borderRadius: "12px" },
          });
        },
        errorAction: (errMsg) => {
          if (typeof errMsg === "string") errMsg = [errMsg];
          errMsg.map((item:string)=> {
            enqueueSnackbar(item, {
              variant: "error",
              autoHideDuration: 3000,
              style: { fontFamily: "Urbanist", borderRadius: "12px" },
            });
          });
          setUserInfo(initialState);
        }
      })
    )
  }

  return <SignUp 
    userInfo = {userInfo}
    onSubmit = {onSubmit}
    onChange = {onChange}
    setGender={setGender}
    birthdayChange={birthdayChange}
  />;
};
