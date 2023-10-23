import dayjs, { Dayjs } from "dayjs";
import DatePickerValue from "../DatePickerValue";
import React, { ChangeEvent, useState } from "react";
import { UserModel } from "models";

interface Sign_Up {
  userInfo: UserModel;
  onChange: (e:ChangeEvent<HTMLInputElement>)=>void;
  onSubmit: () =>void;
  setGender: () => void;
  birthdayChange: (date: Dayjs | null) => void;
}

export const SignUp: React.FC<Sign_Up> = (props) => {

  return (
    <div className="overflow-auto h-[calc(100vh-153px-249px)] gap-[12px] px-[24px] py-[30px] flex flex-col items-center">
      <h1 className="text-[#1A3129] font-Urbanist text-[58px] not-italic font-bold leading-[150%] uppercase">
        Sign Up
      </h1>
      <p className="text-[#1A3129] text-center font-Urbanist text-[18px] not-italic font-medium leading-[150%] uppercase">
        Create a developer profile/portfolio, share posts and get help from
        other developers
      </p>
      <div className="flex flex-col items-stretch mt-[20px]">
        <div className="gap-[5px] flex flex-col items-stretch px-[8px] py-[12px]">
          <p className="pl-[16px] text-[#468671] font-Urbanist text-[12px] not-italic font-medium leading-[14px] uppercase">
            NAME*
          </p>
          <input
            type="text"
            name="name"
            value={props.userInfo.name}
            onChange={props.onChange}
            className="border-[#CBEA7B] border-solid border-[1px] bg-[#F6FBE9] w-[50vw] flex-shrink rounded-[5px] py-[16px] pl-[22px] text-[#468671] font-Urbanist text-[14px] not-italic font-medium leading-[14px]"
            placeholder="passion0401lad"
          />
        </div>
        <div className="gap-[5px] flex flex-col items-stretch px-[8px] py-[12px]">
          <p className="pl-[16px] text-[#468671] font-Urbanist text-[12px] not-italic font-medium leading-[14px] uppercase">
            EMAIL*
          </p>
          <input
            type="text"
            name="email"
            value={props.userInfo.email}
            onChange={props.onChange}
            className="border-[#CBEA7B] border-solid border-[1px] bg-[#F6FBE9] w-[50vw] flex-shrink rounded-[5px] py-[16px] pl-[22px] text-[#468671] font-Urbanist text-[14px] not-italic font-medium leading-[14px]"
            placeholder="passion0401lad@gmail.com"
          />
        </div>
        <div className="w-[50vw] h-[100%] ml-[8px] flex p-[10px] items-center justify-between rounded-[8px] border-[1px] border-solid border-[#DCF1A7]">
          <div className="flex flex-col gap-[5px] ml-[10px]">
            <p className="text-center text-[#468671] font-Urbanist text-[12px] not-italic font-medium leading-[14px] uppercase">
              GENDER
            </p>
            <div className="flex gap-[3px]">
              <button
                onClick={props.setGender}
                className={
                  (props.userInfo.sex
                    ? "hover:bg-[#386b59] bg-[#234338] text-[#fff] "
                    : "hover:bg-[#57a387] hover:text-[#fff] text-[#4C4C4C] ") +
                  "h-[29px] w-[60px] hidden min-[270px]:flex font-Urbanist text-[10px] not-italic font-semibold leading-[150%] flex px-[24px] py-[10px] justify-center items-center gap-[10px] rounded-[6px]"
                }
              >
                Male
              </button>
              <button
                onClick={props.setGender}
                className={
                  (!props.userInfo.sex
                    ? "hover:bg-[#386b59] bg-[#234338] text-[#fff] "
                    : "hover:bg-[#57a387] hover:text-[#fff] text-[#4C4C4C] ") +
                  "h-[29px] w-[60px] hidden min-[270px]:flex font-Urbanist text-[10px] not-italic font-semibold leading-[150%] flex px-[24px] py-[10px] justify-center items-center gap-[10px] rounded-[6px]"
                }
              >
                Female
              </button>
            </div>
          </div>
          <DatePickerValue
            className=""
            label="Birthday*"
            value={props.userInfo.birthday}
            onChange={props.birthdayChange}
          />
        </div>
        <div className="gap-[5px] flex flex-col items-stretch px-[8px] py-[12px]">
          <p className="pl-[16px] text-[#468671] font-Urbanist text-[12px] not-italic font-medium leading-[14px] uppercase">
            PASSWORD
          </p>
          <input
            type="password"
            name="password"
            value={props.userInfo.password}
            onChange={props.onChange}
            className="border-[#CBEA7B] border-solid border-[1px] bg-[#F6FBE9] w-[50vw] flex-shrink rounded-[5px] py-[16px] pl-[22px] text-[#468671] font-Urbanist text-[14px] not-italic font-medium leading-[14px]"
            placeholder="password"
          />
        </div>
        <div className="gap-[5px] flex flex-col items-stretch px-[8px] py-[12px]">
          <p className="pl-[16px] text-[#468671] font-Urbanist text-[12px] not-italic font-medium leading-[14px] uppercase">
            CONFIRM PASSWORD
          </p>
          <input
            type="password"
            name="confirmPassword"
            value={props.userInfo.confirmPassword}
            onChange={props.onChange}
            className="border-[#CBEA7B] border-solid border-[1px] bg-[#F6FBE9] w-[50vw] flex-shrink rounded-[5px] py-[16px] pl-[22px] text-[#468671] font-Urbanist text-[14px] not-italic font-medium leading-[14px]"
            placeholder="confirm password"
          />
        </div>
      </div>
      <button onClick={props.onSubmit} className="w-[100px] rounded-[8px] bg-[#CBEA7B] hover:bg-[#a5c25b] px-[16px] py-[12px] md:px-[24px] md:py-[14px] font-Urbanist text-[14px] not-italic font-semibold leading-[150%]">
        Sign Up
      </button>
    </div>
  );
};
