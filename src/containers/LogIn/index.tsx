import React, { ChangeEvent, useState } from "react";
import { LogIn } from "components";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, AppDispatch, RootState } from "redux/store";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { UserModel } from "models";
import { PATH } from "consts";

interface User_Info {
  email: string;
  password: string;
}

export const LogInContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();  
  const initialState: User_Info = {
    email: "",
    password: "",
  };
  const [userInfo, setUserInfo] = useState<User_Info>(initialState);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  function onSubmit() {
    dispatch(
      AppActions.auth.signInRequest({
        userInfo:userInfo,
        next:()=>{
          dispatch(
            AppActions.auth.getMeRequest({
              next:()=>{                
                navigate(PATH.DASHBOARD)
              }
            })
          )
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

  return <LogIn 
        userInfo={userInfo}
        onChange={onChange}
        onSubmit={onSubmit}
  />;
};
