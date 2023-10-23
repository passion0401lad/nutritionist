import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { useSnackbar } from "notistack";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SignUp } from "components";
import { PATH } from "consts";
import { UserModel } from "models";

import { AppActions, AppDispatch } from "../../redux/store";

export const SignUpContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const initialState: UserModel = {
    name: "",
    email: "",
    sex: true,
    birthday: dayjs("2001-04-01"),
    avatar:'',
    password: "",
    confirmPassword: "",
  };

  const [userInfo, setUserInfo] = useState<UserModel>(initialState);
  const [selectedFile, setSelectedFile] = useState<Record<string, File> | null>(
    null
  );

  const { enqueueSnackbar } = useSnackbar();

  function setGender(): void {
    setUserInfo({ ...userInfo, sex: !userInfo.sex });
  }

  function birthdayChange(date: Dayjs | null): void {
    setUserInfo({ ...userInfo, birthday: date });
  }

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  function onChangeFile(e: any) {
    if (Object.keys(e.target.files).length > 0) {
      setSelectedFile(e.target.files);
      const file = e.target.files[0];
      const date = new Date(Date.now());
      const saveAs = `${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${file.name}`;
      console.log(saveAs)
      // console.log(new Date(Date.now()))
      setUserInfo({...userInfo, avatar: saveAs})
    }
    else setSelectedFile(null);
  }

  async function fileUpload() {
    if (selectedFile) {
      for (let item of Object.keys(selectedFile)) {
        const data = new FormData();
        data.append("file", selectedFile[item], selectedFile[item].name);
        // console.log(selectedFile[item])
        // // await axios.post(`${process.env.REACT_APP_BACKEND_API_ENDPOINT}/upload`, data).then((res) => {
        // //   console.log(res.statusText);
        // // });
        // const response = await axios({
        //   url:`${process.env.REACT_APP_BACKEND_API_ENDPOINT}/upload`,
        //   method:'POST',
        //   data:data,
        //   headers:{}
        // });
        // console.log(response.statusText)
        dispatch(
          AppActions.fileLoad.fileLoadRequest({
            data: data,
            next: () => {
              enqueueSnackbar("File uploaded successfully!", {
                variant: "success",
                autoHideDuration: 3000,
                style: { fontFamily: "Urbanist", borderRadius: "12px" },
              });
            },
            errorAction: (errMsg) => {
              if (typeof errMsg === "string") errMsg = [errMsg];
              errMsg.map((item: string) => {
                enqueueSnackbar(item, {
                  variant: "error",
                  autoHideDuration: 3000,
                  style: { fontFamily: "Urbanist", borderRadius: "12px" },
                });
              });
              // setUserInfo(initialState);
            },
          })
        );
      }
    }
  }

  function onSubmit(): void {
    if (userInfo.password !== userInfo.confirmPassword) {
      console.log("password error");
      enqueueSnackbar("password must be same!", {
        variant: "error",
        autoHideDuration: 3000,
        style: { fontFamily: "Urbanist", borderRadius: "15px" },
      });
      setUserInfo({ ...userInfo, password: "", confirmPassword: "" });
      return;
    }
    dispatch(
      AppActions.auth.signUpRequest({
        userInfo: userInfo,
        next: () => {
          fileUpload();
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
          errMsg.map((item: string) => {
            enqueueSnackbar(item, {
              variant: "error",
              autoHideDuration: 3000,
              style: { fontFamily: "Urbanist", borderRadius: "12px" },
            });
          });
          // setUserInfo(initialState);
        },
      })
    );
    // fileUpload();
  }

  return (
    <SignUp
      userInfo={userInfo}
      onSubmit={onSubmit}
      onChange={onChange}
      setGender={setGender}
      birthdayChange={birthdayChange}
      selectedFile={selectedFile}
      onChangeFile={onChangeFile}
      // fileUpload = {fileUpload}
    />
  );
};
